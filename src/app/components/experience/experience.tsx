import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface ExperienceProps {
    theme: ThemeVariation;
    intl: Intl
}

const Experience: React.FC<ExperienceProps> = ({ theme, intl }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial size
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const myStyles = handleStyles(theme, isMobile);

    return (
        <div id="myExperience" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getMyExperienceLabel()}</h2>
            
            <div style={myStyles.experienceWrapper}>
                <div style={myStyles.timeline}></div>
                
                <div style={myStyles.experienceItem} className="animate-fadeIn">
                    <div style={myStyles.timelineDot}></div>
                    <div style={myStyles.experienceContent} className="experience-card">
                        <h3 style={myStyles.companyTitle}>{intl.getExperienceItemBBTitle()}</h3>
                        <span style={myStyles.period}>{intl.getExperienceItemBBPeriod()}</span>
                        <p style={myStyles.description}>{intl.getExperienceItemBBDescription()}</p>
                    </div>
                </div>
                
                <div style={myStyles.experienceItem} className="animate-fadeIn fade-delay-1">
                    <div style={myStyles.timelineDot}></div>
                    <div style={myStyles.experienceContent} className="experience-card">
                        <h3 style={myStyles.companyTitle}>{intl.getExperienceItemTrademapTitle()}</h3>
                        <span style={myStyles.period}>{intl.getExperienceItemTrademapPeriod()}</span>
                        <p style={myStyles.description}>{intl.getExperienceItemTrademapDescription()}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .experience-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .experience-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </div>
    );
};

const handleStyles = (theme: ThemeVariation, isMobile: boolean): Record<string, CSSProperties> => {
    return {
        container: {
            paddingLeft: isMobile ? "20px" : "40px",
            paddingRight: isMobile ? "20px" : "40px",
            paddingBottom: '80px',
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        title: {
            color: theme.getForegroundColor(),
            marginBottom: '20px',
            borderBottom: `2px solid ${theme.getForegroundColor()}`,
            paddingBottom: '10px',
            fontSize: isMobile ? '24px' : '28px',
            textAlign: 'center',
        },
        experienceWrapper: {
            position: 'relative',
            paddingLeft: isMobile ? '20px' : '50px',
        },
        timeline: {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            width: '2px',
            backgroundColor: `${theme.getForegroundColor()}40`,
        },
        experienceItem: {
            position: 'relative',
            marginBottom: '40px',
        },
        timelineDot: {
            position: 'absolute',
            left: isMobile ? '-26px' : '-56px',
            top: '0',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: theme.getForegroundColor(),
            border: `2px solid ${theme.getBackgroundColor()}`,
            zIndex: 2,
        },
        experienceContent: {
            padding: '25px',
            borderRadius: '8px',
            backgroundColor: theme.getBackgroundColor(),
            border: `1px solid ${theme.getForegroundColor()}20`,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        companyTitle: {
            color: theme.getForegroundColor(),
            marginBottom: '5px',
            fontSize: isMobile ? '18px' : '22px',
        },
        period: {
            color: theme.getForegroundColor(),
            opacity: 0.7,
            fontSize: isMobile ? '12px' : '14px',
            display: 'block',
            marginBottom: '15px',
            fontStyle: 'italic',
        },
        description: {
            color: theme.getForegroundColor(),
            lineHeight: '1.7',
            fontSize: isMobile ? '14px' : '16px',
        }
    }
};

export default Experience; 