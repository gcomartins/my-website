import React, { CSSProperties } from 'react';
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
    const { theme, switchTheme, switchLanguage, intl } = props
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const myStyles = handleStyles(theme)

    const aboutMe = intl.getAboutMeLabel()
    const scrollToAboutMe = () => scrollToSection('#aboutMe')

    const myExperiences = intl.getMyExperienceLabel()
    const scrollToMyExperiences = () => scrollToSection('#myExperience')

    const myProjects = intl.getMyProjectsLabel()
    const scrollToMyProjects = () => scrollToSection('#myProjects')

    return (
        <nav style={myStyles.navbar}>
            <div style={myStyles.labels}>
                <h3 style={myStyles.label} onClick={scrollToAboutMe}>{aboutMe}</h3>
                <h3 style={myStyles.label} onClick={scrollToMyExperiences}>{myExperiences}</h3>
                <h3 style={myStyles.label} onClick={scrollToMyProjects}>{myProjects}</h3>
            </div>
            <div style={myStyles.spacing}></div>
            <div style={myStyles.buttons}>
                <MyLanguageDropdown initialValue='pt' theme={theme} handleLanguageChange={switchLanguage} />
                <MyThemeToggle theme={theme} switchTheme={switchTheme} />
            </div>
        </nav>
    );
};

const handleStyles: (theme: ThemeVariation) => Record<string, CSSProperties> = (theme: ThemeVariation) => {
    return {
        navbar: {
            width: '100vw',
            display: 'flex',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingRight: '40px',
            paddingLeft: '40px',
            transition: '0.7s',
            backgroundColor: theme.getBackgroundColor()
        },
        labels: {
            display: 'flex',
            flex: 8,
            justifyContent: 'space-around'
        },
        label: {
            color: theme.getForegroundColor()
        },
        spacing: {
            flex: 5
        },
        buttons: { 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' ,
            flex: 1,
        }
    }
}

export default MyNavBar;
