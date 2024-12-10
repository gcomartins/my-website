import ThemeVariation from '@/app/theme/theme';
import React, { useState } from 'react';

interface MyLanguageDropdownProps {
    initialValue: string;
    theme: ThemeVariation;
    handleLanguageChange: (newLanguage: string) => void;
}
const MyLanguageDropdown: React.FC<MyLanguageDropdownProps> = ({initialValue, theme, handleLanguageChange}) => {
    const [selectedLanguage, setNewLanguage] = useState(initialValue)
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value
        setNewLanguage(newLanguage)
        handleLanguageChange(newLanguage)
    }
    
    return (
        <select value={selectedLanguage} onChange={changeLanguage} style={{ padding: '10px', borderRadius: '5px' }}>
            <option value="en">English</option>
            <option value="pt">Português</option>
        </select>
    );
};

export default MyLanguageDropdown;
