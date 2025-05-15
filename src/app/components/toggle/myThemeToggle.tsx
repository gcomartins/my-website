import AppState from '@/app/appState';
import React, { useState } from 'react';

interface MyToggleProps {
    switchTheme: () => void;
}

const MyThemeToggle: React.FC<MyToggleProps> = ({ switchTheme  }) => {
    const [isDarkMode, setDarkMode] = useState(AppState.isDarkMode);
    
    const toggleStyles: React.CSSProperties = {
        display: 'inline-block',
        width: '60px',
        height: '30px',
        backgroundColor: isDarkMode ? '#384454' : '#f0f0f0',
        borderRadius: '15px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        boxShadow: isDarkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${isDarkMode ? '#2c3440' : '#e0e0e0'}`
    };

    const circleStyles: React.CSSProperties = {
        width: '26px',
        height: '26px',
        backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
        borderRadius: '50%',
        position: 'absolute',
        top: '1px',
        left: isDarkMode ? '2px' : '32px',
        transition: 'left 0.3s, background-color 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
    };

    const toggle = () => {
        setDarkMode(!isDarkMode);
        switchTheme();
    };

    const sunIconStyles: React.CSSProperties = {
        opacity: isDarkMode ? 0 : 1,
        transition: 'opacity 0.3s',
        position: 'absolute',
        color: '#f39c12'
    };

    const moonIconStyles: React.CSSProperties = {
        opacity: isDarkMode ? 1 : 0,
        transition: 'opacity 0.3s',
        position: 'absolute',
        color: '#f1c40f'
    };

    return (
        <div style={toggleStyles} onClick={toggle}>
            <div style={circleStyles}>
                <div style={sunIconStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                </div>
                <div style={moonIconStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </div>
            </div>
            <span style={{
                position: 'absolute',
                top: '7px',
                right: isDarkMode ? '10px' : 'auto',
                left: isDarkMode ? 'auto' : '10px',
                fontSize: '10px',
                fontWeight: 'bold',
                color: isDarkMode ? '#f1c40f' : '#f39c12',
                opacity: 0.7
            }}>
                {!isDarkMode ? '🌙' : '☀️'}
            </span>
        </div>
    );
};

export default MyThemeToggle;