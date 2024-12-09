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
    return (
        <nav style={myStyles.navbar}>
            <h3 style={myStyles.label} onClick={() => scrollToSection('#aboutMe')}>{intl.getAboutMeLabel()}</h3>
            <h3 style={myStyles.label} onClick={() => scrollToSection('#myExperience')}>{intl.getMyExperienceLabel()}</h3>
            <h3 style={myStyles.label} onClick={() => scrollToSection('#myProjects')}>{intl.getMyProjectsLabel()}</h3>
            <div>
                <MyButton theme={theme} label={intl.getChangeThemeLabel()} onClick={switchTheme} />
                <MyButton theme={theme} label={intl.getChangeLanguageLabel()} onClick={switchLanguage} />
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
