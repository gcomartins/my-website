import React, { CSSProperties, useState, useEffect, useCallback } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';
import MyThemeToggle from '../toggle/myThemeToggle';
import MyLanguageDropdown from '../dropdown/myLanguageDropdown';
import Image from 'next/image';

interface MyNavBarProps {
    theme: ThemeVariation,
    switchTheme: () => void,
    switchLanguage: (newLanguage: string) => void,
    intl: Intl
}

const MyNavBar: React.FC<MyNavBarProps> = (props: MyNavBarProps) => {
    const { theme, switchTheme, switchLanguage, intl } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/my-website' : '.';
    const logoPath = `${basePath}/spike.png`;

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        
        // Determina se a página foi scrollada além de um limite
        setIsScrolled(currentScrollY > 20);
        
        // Sempre visível no topo da página
        if (currentScrollY < 20) {
            setVisible(true);
            setLastScrollY(currentScrollY);
            return;
        }
        
        // Mostra a navbar quando rola para cima
        if (currentScrollY < lastScrollY) {
            setVisible(true);
        } 
        // Esconde a navbar quando rola para baixo e já está um pouco abaixo do topo
        else if (currentScrollY > lastScrollY && currentScrollY > 150) {
            setVisible(false);
        }
        
        // Atualiza a posição do último scroll
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial size
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleScroll]);

    // Efeito para controlar o scroll quando o menu mobile está aberto
    useEffect(() => {
        if (isMobile) {
            if (isOpen) {
                // Desativa o scroll quando o menu está aberto
                document.body.style.overflow = 'hidden';
                // Força a navbar a ficar visível quando o menu está aberto
                setVisible(true);
            } else {
                // Reativa o scroll quando o menu está fechado
                document.body.style.overflow = 'auto';
            }
        }
        
        // Limpa o efeito quando o componente é desmontado
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, isMobile]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const myStyles = handleStyles(theme, isScrolled, isOpen, visible);

    const aboutMe = intl.getAboutMeLabel();
    const scrollToAboutMe = () => scrollToSection('aboutMe');

    const myExperiences = intl.getMyExperienceLabel();
    const scrollToMyExperiences = () => scrollToSection('myExperience');

    const myProjects = intl.getMyProjectsLabel();
    const scrollToMyProjects = () => scrollToSection('myProjects');
    
    const collaborativeWork = intl.getCollaborativeWorkLabel();
    const scrollToCollaborative = () => scrollToSection('collaborative');
    
    const vibeCoding = intl.getVibeCodingLabel();
    const scrollToVibe = () => scrollToSection('vibe');
    
    const contactMe = intl.getContactMeLabel();
    const scrollToContact = () => scrollToSection('contact');

    return (
        <nav style={myStyles.navbar}>
            <div style={myStyles.logo} className="animate-fadeIn" onClick={scrollToAboutMe}>
                <Image
                    src={logoPath}
                    alt="Logo"
                    width={40}
                    height={40}
                    style={myStyles.logoImage}
                />
            </div>

            {/* Desktop Menu */}
            {!isMobile && (
                <div style={myStyles.desktopMenu}>
                    <div style={myStyles.labels}>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-1" onClick={scrollToAboutMe}>{aboutMe}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-2" onClick={scrollToMyExperiences}>{myExperiences}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-3" onClick={scrollToMyProjects}>{myProjects}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-4" onClick={scrollToCollaborative}>{collaborativeWork}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-5" onClick={scrollToVibe}>{vibeCoding}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-6" onClick={scrollToContact}>{contactMe}</h3>
                    </div>
                    <div style={myStyles.buttons}>
                        <MyLanguageDropdown initialValue='en' theme={theme} handleLanguageChange={switchLanguage} />
                        <MyThemeToggle switchTheme={switchTheme} />
                    </div>
                </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
                <div style={myStyles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
                    <div style={{...myStyles.menuBar, transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></div>
                    <div style={{...myStyles.menuBar, opacity: isOpen ? 0 : 1}}></div>
                    <div style={{...myStyles.menuBar, transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'}}></div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {isMobile && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: theme.getBackgroundColor(),
                        zIndex: 90,
                        opacity: isOpen ? 1 : 0,
                        visibility: isOpen ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '60px 20px 40px',
                        overflow: 'auto',
                        width: '100vw',
                        height: '100vh'
                    }}
                >
                    <h3 style={myStyles.mobileLabel} onClick={scrollToAboutMe}>{aboutMe}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToMyExperiences}>{myExperiences}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToMyProjects}>{myProjects}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToCollaborative}>{collaborativeWork}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToVibe}>{vibeCoding}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToContact}>{contactMe}</h3>
                    <div style={myStyles.mobileButtons}>
                        <MyLanguageDropdown initialValue='en' theme={theme} handleLanguageChange={switchLanguage} />
                        <MyThemeToggle switchTheme={switchTheme} />
                    </div>
                </div>
            )}
        </nav>
    );
};

const handleStyles = (theme: ThemeVariation, isScrolled: boolean, isOpen: boolean, visible: boolean): Record<string, CSSProperties> => {
    return {
        navbar: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: isScrolled ? '10px' : '20px',
            paddingBottom: isScrolled ? '10px' : '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
            backgroundColor: isScrolled 
                ? `${theme.getBackgroundColor()}ee` 
                : theme.getBackgroundColor(),
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
            transform: visible ? 'translateY(0)' : 'translateY(-100%)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease',
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        },
        logoImage: {
            borderRadius: '50%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        desktopMenu: {
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
        },
        labels: {
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
        },
        label: {
            color: theme.getForegroundColor(),
            cursor: 'pointer',
            fontSize: '16px',
        },
        buttons: { 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
        },
        mobileMenuButton: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '24px',
            height: '18px',
            cursor: 'pointer',
            zIndex: 110,
            position: 'relative',
        },
        menuBar: {
            width: '100%',
            height: '2px',
            backgroundColor: theme.getForegroundColor(),
            transition: 'all 0.3s ease',
        },
        mobileMenu: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: theme.getBackgroundColor(),
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
            paddingTop: '60px',
            overflow: 'auto',
        },
        mobileLabel: {
            color: theme.getForegroundColor(),
            cursor: 'pointer',
            fontSize: '24px',
            padding: '20px 0',
            fontWeight: '600',
            textAlign: 'center',
            width: '100%',
            transition: 'opacity 0.3s ease',
        },
        mobileButtons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '40px',
            width: '100%',
        },
    };
};

export default MyNavBar;
