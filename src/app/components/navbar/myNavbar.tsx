import React, { CSSProperties, useState, useEffect } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';
import MyThemeToggle from '../toggle/myThemeToggle';
import MyLanguageDropdown from '../dropdown/myLanguageDropdown';

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

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const myStyles = handleStyles(theme, isScrolled);

    const aboutMe = intl.getAboutMeLabel();
    const scrollToAboutMe = () => scrollToSection('aboutMe');

    const myExperiences = intl.getMyExperienceLabel();
    const scrollToMyExperiences = () => scrollToSection('myExperience');

    const myProjects = intl.getMyProjectsLabel();
    const scrollToMyProjects = () => scrollToSection('myProjects');
    
    const contactMe = intl.getContactMeLabel();
    const scrollToContact = () => scrollToSection('contact');

    return (
        <nav style={myStyles.navbar}>
            <div style={myStyles.logo} className="animate-fadeIn">
                <span>GM</span>
            </div>

            {/* Desktop Menu */}
            {!isMobile && (
                <div style={myStyles.desktopMenu}>
                    <div style={myStyles.labels}>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-1" onClick={scrollToAboutMe}>{aboutMe}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-2" onClick={scrollToMyExperiences}>{myExperiences}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-3" onClick={scrollToMyProjects}>{myProjects}</h3>
                        <h3 style={myStyles.label} className="nav-label animate-fadeIn fade-delay-3" onClick={scrollToContact}>{contactMe}</h3>
                    </div>
                    <div style={myStyles.buttons}>
                        <MyLanguageDropdown initialValue='en' theme={theme} handleLanguageChange={switchLanguage} />
                        <MyThemeToggle theme={theme} switchTheme={switchTheme} />
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
            {isMobile && isOpen && (
                <div style={myStyles.mobileMenu}>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToAboutMe}>{aboutMe}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToMyExperiences}>{myExperiences}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToMyProjects}>{myProjects}</h3>
                    <h3 style={myStyles.mobileLabel} onClick={scrollToContact}>{contactMe}</h3>
                    <div style={myStyles.mobileButtons}>
                        <MyLanguageDropdown initialValue='en' theme={theme} handleLanguageChange={switchLanguage} />
                        <MyThemeToggle theme={theme} switchTheme={switchTheme} />
                    </div>
                </div>
            )}
        </nav>
    );
};

const handleStyles = (theme: ThemeVariation, isScrolled: boolean): Record<string, CSSProperties> => {
    return {
        navbar: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: isScrolled ? '10px' : '20px',
            paddingBottom: isScrolled ? '10px' : '20px',
            paddingRight: '40px',
            paddingLeft: '40px',
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
            color: theme.getForegroundColor(),
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
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
        },
        menuBar: {
            width: '100%',
            height: '2px',
            backgroundColor: theme.getForegroundColor(),
            transition: 'all 0.3s ease',
        },
        mobileMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: theme.getBackgroundColor(),
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 90,
            animation: 'fadeIn 0.3s ease-out forwards',
        },
        mobileLabel: {
            color: theme.getForegroundColor(),
            cursor: 'pointer',
            fontSize: '18px',
            padding: '10px 0',
            borderBottom: `1px solid ${theme.getForegroundColor()}30`,
        },
        mobileButtons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '10px',
        },
    };
};

export default MyNavBar;
