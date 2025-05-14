import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface VibeProps {
    theme: ThemeVariation;
    intl: Intl
}

const Vibe: React.FC<VibeProps> = ({ theme, intl }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        console.log("Vibe component mounted with ID:", document.getElementById('vibe')?.id);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial size
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleProjectChange = (index: number) => {
        if (index === activeProject) return;
        setIsAnimating(true);
        setActiveProject(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const myStyles = handleStyles(theme, isMobile, isAnimating);

    const projects = [
        {
            title: intl.getVibeProject1Title(),
            subtitle: intl.getVibeProject1Description(),
            context: intl.getVibeProject1Context(),
            challenges: intl.getVibeProject1Challenges(),
            solutions: intl.getVibeProject1Solutions(),
            results: intl.getVibeProject1Results(),
            stack: intl.getVibeProject1Stack(),
            url: intl.getVibeProject1Url(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18.5 9l-6-6-8 8"></path>
                    <path d="M11 3L8 12"></path>
                    <path d="M13 15l9 6"></path>
                </svg>
            )
        },
        {
            title: intl.getVibeProject2Title(),
            subtitle: intl.getVibeProject2Description(),
            context: intl.getVibeProject2Context(),
            challenges: intl.getVibeProject2Challenges(),
            solutions: intl.getVibeProject2Solutions(),
            results: intl.getVibeProject2Results(),
            stack: intl.getVibeProject2Stack(),
            url: intl.getVibeProject2Url(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            title: intl.getVibeProject3Title(),
            subtitle: intl.getVibeProject3Description(),
            context: intl.getVibeProject3Context(),
            challenges: intl.getVibeProject3Challenges(),
            solutions: intl.getVibeProject3Solutions(),
            results: intl.getVibeProject3Results(),
            stack: intl.getVibeProject3Stack(),
            url: intl.getVibeProject3Url(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                </svg>
            )
        }
    ];

    return (
        <div id="vibe" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getVibeCodingLabel()}</h2>
            <p style={myStyles.description} className="animate-fadeIn fade-delay-1">{intl.getVibeCodingDescription()}</p>
            
            <div style={myStyles.projectTabs} className="animate-fadeIn fade-delay-1">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        style={{
                            ...myStyles.projectTab,
                            ...(activeProject === index ? myStyles.activeTab : {})
                        }}
                        onClick={() => handleProjectChange(index)}
                        className={activeProject === index ? "active-tab" : ""}
                    >
                        <div style={myStyles.tabIcon}>{project.icon}</div>
                        <div style={myStyles.tabTextContainer}>
                            <h3 style={myStyles.tabTitle}>
                                {project.title.includes(' - ') 
                                    ? project.title.split(' - ')[0] 
                                    : project.title}
                            </h3>
                            {!isMobile && <p style={myStyles.tabSubtitle}>{project.subtitle}</p>}
                        </div>
                    </div>
                ))}
            </div>
            
            <div style={myStyles.projectDetail} className={isAnimating ? "fade-out" : "fade-in"}>
                <h3 style={myStyles.detailTitle}>{projects[activeProject].title}</h3>
                <p style={myStyles.detailSubtitle}>{projects[activeProject].subtitle}</p>
                
                <div style={myStyles.projectLink}>
                    <a 
                        href={projects[activeProject].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={myStyles.linkButton}
                    >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                
                <div style={myStyles.detailSection}>
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[activeProject].context.includes(': ') 
                                ? projects[activeProject].context.split(': ')[0] 
                                : 'Context'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[activeProject].context.includes(': ') 
                                ? projects[activeProject].context.split(': ')[1] 
                                : projects[activeProject].context}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[activeProject].challenges.includes(': ') 
                                ? projects[activeProject].challenges.split(': ')[0] 
                                : 'Challenges'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[activeProject].challenges.includes(': ') 
                                ? projects[activeProject].challenges.split(': ')[1] 
                                : projects[activeProject].challenges}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[activeProject].solutions.includes(': ') 
                                ? projects[activeProject].solutions.split(': ')[0] 
                                : 'Solutions'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[activeProject].solutions.includes(': ') 
                                ? projects[activeProject].solutions.split(': ')[1] 
                                : projects[activeProject].solutions}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[activeProject].results.includes(': ') 
                                ? projects[activeProject].results.split(': ')[0] 
                                : 'Results'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[activeProject].results.includes(': ') 
                                ? projects[activeProject].results.split(': ')[1] 
                                : projects[activeProject].results}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[activeProject].stack.includes(': ') 
                                ? projects[activeProject].stack.split(': ')[0] 
                                : 'Tech Stack'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[activeProject].stack.includes(': ') 
                                ? projects[activeProject].stack.split(': ')[1] 
                                : projects[activeProject].stack}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .fade-in {
                    opacity: 1;
                    transition: opacity 0.3s ease;
                }
                .fade-out {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .active-tab {
                    position: relative;
                }
                .active-tab:after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40%;
                    height: 3px;
                    background-color: ${theme.getForegroundColor()};
                    border-radius: 3px;
                }
            `}</style>
        </div>
    );
};

const handleStyles = (theme: ThemeVariation, isMobile: boolean, isAnimating: boolean): Record<string, CSSProperties> => {
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
        projectTabs: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '15px',
            marginBottom: '30px',
            justifyContent: 'center',
            flexWrap: isMobile ? 'nowrap' : 'wrap',
        },
        projectTab: {
            backgroundColor: theme.getBackgroundColor(),
            borderRadius: '10px',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            cursor: 'pointer',
            border: `1px solid ${theme.getForegroundColor()}20`,
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            flexBasis: isMobile ? 'auto' : '30%',
            flexGrow: isMobile ? 0 : 0,
            position: 'relative',
            overflow: 'hidden',
        },
        activeTab: {
            borderColor: `${theme.getForegroundColor()}80`,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
            backgroundColor: `${theme.getBackgroundColor()}`,
        },
        tabIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: `${theme.getForegroundColor()}10`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            transition: 'all 0.3s ease',
        },
        tabTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            overflow: 'hidden',
            flexGrow: 1,
        },
        tabTitle: {
            color: theme.getForegroundColor(),
            fontSize: '16px',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 'bold',
        },
        tabSubtitle: {
            color: `${theme.getForegroundColor()}80`,
            fontSize: '14px',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        projectDetail: {
            backgroundColor: theme.getBackgroundColor(),
            borderRadius: '12px',
            padding: '25px',
            border: `1px solid ${theme.getForegroundColor()}20`,
            boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
            opacity: isAnimating ? 0 : 1,
            transition: 'opacity 0.3s ease',
        },
        detailTitle: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '20px' : '24px',
            marginBottom: '5px',
        },
        detailSubtitle: {
            color: `${theme.getForegroundColor()}90`,
            fontSize: '16px',
            marginBottom: '15px',
            fontStyle: 'italic',
        },
        projectLink: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '25px',
        },
        linkButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.getForegroundColor(),
            color: theme.getBackgroundColor(),
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        detailSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        detailItem: {
            borderBottom: `1px solid ${theme.getForegroundColor()}10`,
            paddingBottom: '15px',
            transition: 'all 0.3s ease',
        },
        detailItemTitle: {
            color: theme.getForegroundColor(),
            fontSize: '17px',
            marginBottom: '8px',
            fontWeight: 'bold',
        },
        detailItemText: {
            color: theme.getForegroundColor(),
            fontSize: '15px',
            lineHeight: '1.6',
        }
    }
};

export default Vibe; 