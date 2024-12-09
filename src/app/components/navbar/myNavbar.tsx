import React, { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import MyButton from '../button/myButton';
import Intl from '@/app/intl/language';

interface MyNavBarProps {
    theme: ThemeVariation,
    switchTheme: () => void,
    switchLanguage: () => void,
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

    const changeTheme = intl.getChangeThemeLabel()
    const changeLanguage = intl.getChangeLanguageLabel()
    return (
        <nav style={myStyles.navbar}>
            <h3 style={myStyles.label} onClick={scrollToAboutMe}>{aboutMe}</h3>
            <h3 style={myStyles.label} onClick={scrollToMyExperiences}>{myExperiences}</h3>
            <h3 style={myStyles.label} onClick={scrollToMyProjects}>{myProjects}</h3>
            <div>
                <MyButton theme={theme} label={changeTheme} onClick={switchTheme} />
                <MyButton theme={theme} label={changeLanguage} onClick={switchLanguage} />
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
            padding: '10px',
            backgroundColor: theme.getBackgroundColor()
        },
        label: {
            color: theme.getForegroundColor()
        }
    }
}

export default MyNavBar;
