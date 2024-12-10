import React, { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import MyButton from '../button/myButton';
import Intl from '@/app/intl/language';
import MyThemeToggle from '../toggle/myThemeToggle';
import AppState from '@/app/appState';
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

    const changeLanguageLabel = intl.getChangeLanguageLabel()
    return (
        <nav style={myStyles.navbar}>
            <h3 style={myStyles.label} onClick={scrollToAboutMe}>{aboutMe}</h3>
            <h3 style={myStyles.label} onClick={scrollToMyExperiences}>{myExperiences}</h3>
            <h3 style={myStyles.label} onClick={scrollToMyProjects}>{myProjects}</h3>
            <div>
                <MyLanguageDropdown initialValue='pt' theme={theme} handleLanguageChange={switchLanguage}/>
                <MyThemeToggle theme={theme} switchTheme={switchTheme} intl={intl}/>
            </div>
        </nav>
    );
};

const handleStyles: (theme: ThemeVariation) => Record<string, CSSProperties> = (theme: ThemeVariation) => {
    return {
        navbar: {
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingRight: '10px',
            paddingLeft: '10px',
            transition: '0.7s',
            backgroundColor: theme.getBackgroundColor()
        },
        label: {
            color: theme.getForegroundColor()
        }
    }
}

export default MyNavBar;
