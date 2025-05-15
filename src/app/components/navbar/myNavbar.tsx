import React, { CSSProperties, useState, useEffect } from 'react';
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
    
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/my-website' : '.';
    const logoPath = `${basePath}/spike.png`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

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
    }, []);

    // Efeito para controlar o scroll quando o menu mobile está aberto
    useEffect(() => {
        if (isMobile) {
            if (isOpen) {
                // Desativa o scroll quando o menu está aberto
                document.body.style.overflow = 'hidden';
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

    const myStyles = handleStyles(theme, isScrolled, isOpen);

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

            {/* Mobile Menu */}
            {isMobile && (
                <div style={myStyles.mobileMenu}>
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

const handleStyles = (theme: ThemeVariation, isScrolled: boolean, isOpen: boolean): Record<string, CSSProperties> => {
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
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled 
                ? `${theme.getBackgroundColor()}ee` 
                : theme.getBackgroundColor(),
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
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
            zIndex: 101,
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
        },
        mobileLabel: {
            color: theme.getForegroundColor(),
            cursor: 'pointer',
            fontSize: '22px',
            padding: '15px 0',
            fontWeight: '500',
            textAlign: 'center',
            width: '100%',
        },
        mobileButtons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
        },
    };
};

export default MyNavBar;
