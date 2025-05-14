import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface CollaborativeProps {
    theme: ThemeVariation;
    intl: Intl
}

const Collaborative: React.FC<CollaborativeProps> = ({ theme, intl }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        console.log("Collaborative component mounted with ID:", document.getElementById('collaborative')?.id);
        
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
            title: intl.getCapivaraProject1Title(),
            subtitle: intl.getCapivaraProject1Description(),
            context: intl.getCapivaraProject1Context(),
            challenges: intl.getCapivaraProject1Challenges(),
            solutions: intl.getCapivaraProject1Solutions(),
            results: intl.getCapivaraProject1Results(),
            stack: intl.getCapivaraProject1Stack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: intl.getCapivaraProject2Title(),
            subtitle: intl.getCapivaraProject2Description(),
            context: intl.getCapivaraProject2Context(),
            challenges: intl.getCapivaraProject2Challenges(),
            solutions: intl.getCapivaraProject2Solutions(),
            results: intl.getCapivaraProject2Results(),
            stack: intl.getCapivaraProject2Stack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            )
        }
    ];

    return (
        <div id="collaborative" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getCollaborativeWorkLabel()}</h2>
            <p style={myStyles.description} className="animate-fadeIn fade-delay-1">{intl.getCollaborativeWorkDescription()}</p>
            
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
                                {project.title.includes(' at ') 
                                    ? project.title.split(' at ')[0] 
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
            marginBottom: '25px',
            fontStyle: 'italic',
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

export default Collaborative; 