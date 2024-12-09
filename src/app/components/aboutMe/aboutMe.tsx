import React from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface AboutMeProps {
    theme: ThemeVariation;
    intl: Intl
}

const AboutMe: React.FC<AboutMeProps> = ({ theme, intl }) => {
    const myStyles = handleStyles(theme)

    return <>
        <div style={myStyles.content}>
            <p style={{ color: theme.getForegroundColor() }}>{intl.getTitle()}</p>
            <p style={{ color: theme.getForegroundColor() }}>{intl.getDescription()}</p>
            <p style={{ color: theme.getForegroundColor() }}>{intl.getMyMainTechnologies()}</p>
            <ul style={myStyles.list}>
                <i>{intl.getFirstTechLabel()}</i>
                <i>{intl.getSecondTechLabel()}</i>
                <i>{intl.getThirdTechLabel()}</i>
                <i>{intl.getFourthTechLabel()}</i>
            </ul>
        </div>
    </>
};

const handleStyles: (theme: ThemeVariation) => Record<string, CSSProperties> = (theme: ThemeVariation) => {
    return {
        content: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "80px"
        },
        list: {
            color: theme.getForegroundColor(),
            display: 'flex',
            flexDirection: 'column'
        }
    }
}

export default AboutMe;
