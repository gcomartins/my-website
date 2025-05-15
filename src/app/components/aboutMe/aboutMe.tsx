import React, { useState, useEffect } from 'react';
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
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/my-website' : '.';
    const imgPath = `${basePath}/my_profile_pic.png`;

    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipVisible, setTooltipVisible] = useState(false);
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

    const handleMouseMove = (e: React.MouseEvent) => {
        setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    const myStyles = handleStyles(theme, isMobile);

    return (
        <div id="aboutMe" style={myStyles.content}>
            <div style={myStyles.heroSection} className="animate-fadeIn">
                <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                    style={myStyles.imageContainer}
                >
                    <Image
                        src={imgPath}
                        alt='My photo'
                        width={isMobile ? 180 : 250}
                        height={isMobile ? 180 : 250}
                        style={myStyles.img}
                        priority
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
                <div style={myStyles.heroContent} className="animate-fadeIn fade-delay-1">
                    <h1 style={myStyles.greeting}>{intl.getTitle()}</h1>
                    <p style={myStyles.description}>{intl.getAboutMeEnhancedDescription()}</p>
                </div>
            </div>

            <div style={myStyles.profileSection} className="animate-fadeIn fade-delay-2">
                <h2 style={myStyles.profileTitle}>{intl.getAboutMeProfileLabel()}</h2>
                
                <div style={myStyles.profileGrid}>
                    <div style={myStyles.profileCard}>
                        <div style={myStyles.profileIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                        </div>
                        <p style={myStyles.profileText}>{intl.getAboutMeTechnicalProfile()}</p>
                    </div>
                    
                    <div style={myStyles.profileCard}>
                        <div style={myStyles.profileIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <p style={myStyles.profileText}>{intl.getAboutMeCollaborationProfile()}</p>
                    </div>
                    
                    <div style={myStyles.profileCard}>
                        <div style={myStyles.profileIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <p style={myStyles.profileText}>{intl.getAboutMeCareerGoals()}</p>
                    </div>
                </div>
            </div>

            <div style={myStyles.skillsSection} className="animate-fadeIn fade-delay-3">
                <h2 style={myStyles.skillsTitle}>{intl.getSkillsTitle()}</h2>
                <div style={myStyles.skillsGrid}>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getMobileSkillsTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getMobileSkillsDescription()}</p>
                    </div>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getDesignTokensTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getDesignTokensDescription()}</p>
                    </div>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getSecuritySkillsTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getSecuritySkillsDescription()}</p>
                    </div>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getNetworkingTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getNetworkingDescription()}</p>
                    </div>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getToolsTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getToolsDescription()}</p>
                    </div>
                    <div style={myStyles.skillCategory}>
                        <h3 style={myStyles.categoryTitle}>{intl.getMethodologiesTitle()}</h3>
                        <p style={myStyles.categoryDesc}>{intl.getMethodologiesDescription()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const handleStyles = (theme: ThemeVariation, isMobile: boolean): Record<string, CSSProperties> => {
    return {
        content: {
            paddingLeft: isMobile ? "20px" : "40px",
            paddingRight: isMobile ? "20px" : "40px",
            paddingTop: '100px',
            paddingBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        heroSection: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '30px' : '60px',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        imageContainer: {
            position: 'relative',
            display: 'inline-block',
        },
        img: {
            borderRadius: '50%',
            border: `4px solid ${theme.getForegroundColor()}30`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            objectFit: 'cover',
        },
        heroContent: {
            maxWidth: isMobile ? '100%' : '500px',
        },
        greeting: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '28px' : '36px',
            marginBottom: '15px',
            fontWeight: 'bold',
        },
        description: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '1.7',
            whiteSpace: 'pre-line',
        },
        profileSection: {
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
        },
        profileTitle: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '24px' : '28px',
            marginBottom: '30px',
            textAlign: 'center',
            borderBottom: `2px solid ${theme.getForegroundColor()}30`,
            paddingBottom: '10px',
        },
        profileGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
        },
        profileCard: {
            backgroundColor: theme.getBackgroundColor(),
            border: `1px solid ${theme.getForegroundColor()}20`,
            borderRadius: '12px',
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        profileIcon: {
            width: '50px',
            height: '50px',
            borderRadius: '10px',
            backgroundColor: `${theme.getForegroundColor()}10`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px',
            marginBottom: '15px',
        },
        profileText: {
            color: theme.getForegroundColor(),
            fontSize: '16px',
            lineHeight: '1.7',
        },
        skillsSection: {
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
        },
        skillsTitle: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '24px' : '28px',
            marginBottom: '30px',
            textAlign: 'center',
            borderBottom: `2px solid ${theme.getForegroundColor()}30`,
            paddingBottom: '10px',
        },
        skillsGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
        },
        skillCategory: {
            backgroundColor: theme.getBackgroundColor(),
            border: `1px solid ${theme.getForegroundColor()}20`,
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        categoryTitle: {
            color: theme.getForegroundColor(),
            fontSize: '18px',
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        categoryDesc: {
            color: theme.getForegroundColor(),
            fontSize: '15px',
            lineHeight: '1.6',
        }
    }
};

export default AboutMe;
