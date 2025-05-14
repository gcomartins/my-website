import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface ProjectsProps {
    theme: ThemeVariation;
    intl: Intl
}

const Projects: React.FC<ProjectsProps> = ({ theme, intl }) => {
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

    const projectIcons = {
        design: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
            </svg>
        ),
        compose: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="19" y1="12" x2="5" y2="12"></line>
            </svg>
        ),
        security: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        )
    };

    return (
        <div id="myProjects" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getMyProjectsLabel()}</h2>
            <p style={myStyles.description} className="animate-fadeIn fade-delay-1">{intl.getProjectsDescription()}</p>
            
            <div style={myStyles.projectsGrid}>
                <div 
                    style={myStyles.projectCard}
                    className="project-card animate-fadeIn fade-delay-1"
                >
                    <div style={myStyles.iconWrapper}>
                        {projectIcons.design}
                    </div>
                    <h3 style={myStyles.projectTitle}>{intl.getProjectDesignSystemTitle()}</h3>
                    <p style={myStyles.projectDescription}>{intl.getProjectDesignSystemDescription()}</p>
                </div>
                
                <div 
                    style={myStyles.projectCard}
                    className="project-card animate-fadeIn fade-delay-2"
                >
                    <div style={myStyles.iconWrapper}>
                        {projectIcons.compose}
                    </div>
                    <h3 style={myStyles.projectTitle}>{intl.getProjectJetpackComposeTitle()}</h3>
                    <p style={myStyles.projectDescription}>{intl.getProjectJetpackComposeDescription()}</p>
                </div>
                
                <div 
                    style={myStyles.projectCard}
                    className="project-card animate-fadeIn fade-delay-3"
                >
                    <div style={myStyles.iconWrapper}>
                        {projectIcons.security}
                    </div>
                    <h3 style={myStyles.projectTitle}>{intl.getProjectSecurityTitle()}</h3>
                    <p style={myStyles.projectDescription}>{intl.getProjectSecurityDescription()}</p>
                </div>
            </div>
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
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
            overflow: 'hidden',
        },
        title: {
            color: theme.getForegroundColor(),
            marginBottom: '10px',
            borderBottom: `2px solid ${theme.getForegroundColor()}`,
            paddingBottom: '10px',
            fontSize: isMobile ? '24px' : '28px',
            textAlign: 'center',
        },
        description: {
            color: theme.getForegroundColor(),
            marginBottom: '30px',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 30px',
            fontSize: isMobile ? '14px' : '16px',
        },
        projectsGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
        },
        projectCard: {
            padding: '30px',
            borderRadius: '12px',
            backgroundColor: theme.getBackgroundColor(),
            border: `1px solid ${theme.getForegroundColor()}20`,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        iconWrapper: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: `${theme.getForegroundColor()}10`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '15px',
        },
        projectTitle: {
            color: theme.getForegroundColor(),
            marginBottom: '15px',
            fontSize: isMobile ? '18px' : '20px',
        },
        projectDescription: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '14px' : '15px',
            lineHeight: '1.6',
        }
    }
};

export default Projects; 