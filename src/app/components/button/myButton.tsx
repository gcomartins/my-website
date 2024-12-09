import React from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';

interface MyButtonProps {
    theme: ThemeVariation;
    label: string;
    onClick: () => void,
}

const MyButton: React.FC<MyButtonProps> = ({ theme, label, onClick }) => {
    const myStyle: CSSProperties = {
        color: theme.getButtonForeground(),
        backgroundColor: theme.getBackgroundColor(),
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,
    };

    return <button onClick={onClick} style={myStyle}>{label}</button>;
};

export default MyButton;
