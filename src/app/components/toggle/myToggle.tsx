import AppState from '@/app/appState';
import Intl from '@/app/intl/language';
import ThemeVariation from '@/app/theme/theme';
import React, { useState } from 'react';

interface MyToggleProps {
    theme: ThemeVariation;
    switchTheme: () => void;
    intl: Intl;
}

const MyThemeToggle: React.FC<MyToggleProps> = ({ theme, switchTheme, intl  }) => {
    const [isDarkMode, setDarkMode] = useState(AppState.isDarkMode);
    
    const toggleStyles: React.CSSProperties = {
        display: 'inline-block',
        width: '60px',
        height: '30px',
        backgroundColor: theme.getButtonForeground(),
        borderRadius: '15px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.7s'
    };

    const circleStyles: React.CSSProperties = {
        width: '26px',
        height: '26px',
        backgroundColor: theme.getBackgroundColor(),
        borderRadius: '50%',
        position: 'absolute',
        top: '2px',
        left: isDarkMode ? '2px' : '32px',
        transition: 'left 0.7s, background-color 0.7s'
    };

    const toggle = () => {
        setDarkMode(!isDarkMode)
        switchTheme()
    }

    return (
        <div style={toggleStyles} onClick={toggle}>
            <div style={circleStyles}></div>
        </div>
    );
};

export default MyThemeToggle;