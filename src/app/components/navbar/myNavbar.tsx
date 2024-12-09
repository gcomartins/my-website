import React from 'react';
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
    const {theme, switchTheme, switchLanguage, intl} = props
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{ width: '100vw', display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: theme.getForegroundColor() }}>
            <h3 onClick={() => scrollToSection('aboutMe')}>{intl.getAboutMeLabel()}</h3>
            <h3 onClick={() => scrollToSection('aboutMe')}>{intl.getMyExperienceLabel()}</h3>
            <h3 onClick={() => scrollToSection('aboutMe')}>{intl.getMyProjectsLabel()}</h3>
            <MyButton theme={theme} label={intl.getChangeThemeLabel()} onClick={switchTheme} />
            <MyButton theme={theme} label={intl.getChangeLanguageLabel()} onClick={switchLanguage} />
        </nav>
    );
};

export default MyNavBar;
