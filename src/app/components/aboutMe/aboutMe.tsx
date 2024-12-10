import React, { useState } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';
import Image from 'next/image';

interface AboutMeProps {
    theme: ThemeVariation;
    intl: Intl
}

const AboutMe: React.FC<AboutMeProps> = ({ theme, intl }) => {
    const shouldShowTooltip = process.env.NEXT_PUBLIC_LITERALLY_ME;
    const isProd = process.env.NODE_ENV === 'production'
    const basePath = isProd ? '/my-website' : '.'
    const imgPath = `${basePath}/spike.png`

    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    const myStyles = handleStyles(theme);

    return (
        <>
            <div style={myStyles.content}>
                <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    <Image
                        src={imgPath}
                        alt='My photo'
                        width={250}
                        height={250}
                        style={myStyles.img}
                    />
                    {tooltipVisible && shouldShowTooltip && (
                        <div style={{
                            position: 'fixed',
                            top: `${tooltipPosition.y}px`,
                            left: `${tooltipPosition.x}px`,
                            padding: '5px 10px',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: '5px',
                            zIndex: 1000
                        }}>
                            {intl.getTooltipOnImageLabel()}
                        </div>
                    )}
                </div>
                <div>
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
            </div>
        </>
    );
};

const handleStyles: (theme: ThemeVariation) => Record<string, CSSProperties> = (theme: ThemeVariation) => {
    return {
        content: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "80px",
            paddingBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '36px',
        },
        list: {
            color: theme.getForegroundColor(),
            display: 'flex',
            flexDirection: 'column'
        },
        img: {
            borderRadius: '100%'
        }
    }
};

export default AboutMe;
