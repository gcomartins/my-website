import ThemeVariation from '@/app/theme/theme';
import React, { CSSProperties, useState, useRef, useEffect } from 'react';

interface MyLanguageDropdownProps {
    initialValue: string;
    theme: ThemeVariation;
    handleLanguageChange: (newLanguage: string) => void;
}

const MyLanguageDropdown: React.FC<MyLanguageDropdownProps> = ({ initialValue, theme, handleLanguageChange }) => {
    const [selectedLanguage, setNewLanguage] = useState(initialValue);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' }
    ];

    const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (langCode: string) => {
        setNewLanguage(langCode);
        handleLanguageChange(langCode);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const containerStyle: CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        userSelect: 'none',
    };

    const buttonStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderRadius: '8px',
        backgroundColor: theme.getButtonForeground(),
        color: theme.getButtonBackgroundColor(),
        cursor: 'pointer',
        border: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease',
    };

    const flagStyle: CSSProperties = {
        fontSize: '16px',
        marginRight: '8px',
    };

    const arrowStyle: CSSProperties = {
        marginLeft: '8px',
        transition: 'transform 0.2s ease',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    };

    const dropdownStyle: CSSProperties = {
        position: 'absolute',
        top: '100%',
        left: '0',
        marginTop: '5px',
        backgroundColor: theme.getBackgroundColor(),
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: `1px solid ${theme.getForegroundColor()}20`,
        overflow: 'hidden',
        width: '150px',
        zIndex: 100,
        display: isOpen ? 'block' : 'none',
    };

    const optionStyle = (isSelected: boolean): CSSProperties => ({
        padding: '10px 15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isSelected ? `${theme.getForegroundColor()}15` : 'transparent',
        transition: 'background-color 0.2s ease',
        color: theme.getForegroundColor(),
    });

    const hoverStyle: CSSProperties = {
        backgroundColor: `${theme.getForegroundColor()}10`,
    };

    return (
        <div style={containerStyle} ref={dropdownRef}>
            <div 
                style={buttonStyle} 
                onClick={toggleDropdown}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                }}
            >
                <span style={flagStyle}>{selectedLang.flag}</span>
                <span>{selectedLang.code.toUpperCase()}</span>
                <span style={arrowStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>
            
            <div style={dropdownStyle}>
                {languages.map(lang => (
                    <div
                        key={lang.code}
                        style={optionStyle(lang.code === selectedLanguage)}
                        onClick={() => changeLanguage(lang.code)}
                        onMouseEnter={(e) => {
                            if (lang.code !== selectedLanguage) {
                                Object.assign(e.currentTarget.style, hoverStyle);
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (lang.code !== selectedLanguage) {
                                Object.assign(e.currentTarget.style, optionStyle(false));
                            }
                        }}
                    >
                        <span style={flagStyle}>{lang.flag}</span>
                        <span>{lang.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyLanguageDropdown;
