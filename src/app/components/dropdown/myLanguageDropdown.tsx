import ThemeVariation from '@/app/theme/theme';
import React, { CSSProperties, useState } from 'react';

interface MyLanguageDropdownProps {
    initialValue: string;
    theme: ThemeVariation;
    handleLanguageChange: (newLanguage: string) => void;
}
const MyLanguageDropdown: React.FC<MyLanguageDropdownProps> = ({ initialValue, theme, handleLanguageChange }) => {
    const [selectedLanguage, setNewLanguage] = useState(initialValue)
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value
        setNewLanguage(newLanguage)
        handleLanguageChange(newLanguage)
    }

    const myStyle: CSSProperties = {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: theme.getButtonForeground(),
        color: theme.getButtonBackgroundColor()
    }

    return (
        <select value={selectedLanguage} onChange={changeLanguage} style={myStyle}>
            <option value="en">English</option>
            <option value="pt">Português</option>
        </select>
    );
};

export default MyLanguageDropdown;
