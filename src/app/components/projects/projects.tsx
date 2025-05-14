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
    const [activeProject, setActiveProject] = useState(0);

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

    const projects = [
        {
            title: intl.getProjectDesignSystemEnhancedTitle(),
            subtitle: intl.getProjectDesignSystemEnhancedDescription(),
            context: intl.getProjectDesignSystemContext(),
            challenges: intl.getProjectDesignSystemChallenges(),
            solutions: intl.getProjectDesignSystemSolutions(),
            results: intl.getProjectDesignSystemResults(),
            stack: intl.getProjectDesignSystemStack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            )
        },
        {
            title: intl.getProjectJetpackComposeEnhancedTitle(),
            subtitle: intl.getProjectJetpackComposeEnhancedDescription(),
            context: intl.getProjectJetpackComposeContext(),
            challenges: intl.getProjectJetpackComposeChallenges(),
            solutions: intl.getProjectJetpackComposeSolutions(),
            results: intl.getProjectJetpackComposeResults(),
            stack: intl.getProjectJetpackComposeStack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                </svg>
            )
        },
        {
            title: intl.getProjectSecurityEnhancedTitle(),
            subtitle: intl.getProjectSecurityEnhancedDescription(),
            context: intl.getProjectSecurityContext(),
            challenges: intl.getProjectSecurityChallenges(),
            solutions: intl.getProjectSecuritySolutions(),
            results: intl.getProjectSecurityResults(),
            stack: intl.getProjectSecurityStack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        }
    ];

    return (
        <div id="myProjects" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getMyProjectsLabel()}</h2>
            <p style={myStyles.description} className="animate-fadeIn fade-delay-1">{intl.getProjectsEnhancedDescription()}</p>
            
            <div style={myStyles.projectTabs} className="animate-fadeIn fade-delay-1">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        style={{
                            ...myStyles.projectTab,
                            ...(activeProject === index ? myStyles.activeTab : {})
                        }}
                        onClick={() => setActiveProject(index)}
                    >
                        <div style={myStyles.tabIcon}>{project.icon}</div>
                        <div style={myStyles.tabTextContainer}>
                            <h3 style={myStyles.tabTitle}>{project.title.split(' at ')[0]}</h3>
                            {!isMobile && <p style={myStyles.tabSubtitle}>{project.subtitle}</p>}
                        </div>
                    </div>
                ))}
            </div>
            
            <div style={myStyles.projectDetail} className="animate-fadeIn">
                <h3 style={myStyles.detailTitle}>{projects[activeProject].title}</h3>
                <p style={myStyles.detailSubtitle}>{projects[activeProject].subtitle}</p>
                
                <div style={myStyles.detailSection}>
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>{projects[activeProject].context.split(': ')[0]}</h4>
                        <p style={myStyles.detailItemText}>{projects[activeProject].context.split(': ')[1]}</p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>{projects[activeProject].challenges.split(': ')[0]}</h4>
                        <p style={myStyles.detailItemText}>{projects[activeProject].challenges.split(': ')[1]}</p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>{projects[activeProject].solutions.split(': ')[0]}</h4>
                        <p style={myStyles.detailItemText}>{projects[activeProject].solutions.split(': ')[1]}</p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>{projects[activeProject].results.split(': ')[0]}</h4>
                        <p style={myStyles.detailItemText}>{projects[activeProject].results.split(': ')[1]}</p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>{projects[activeProject].stack.split(': ')[0]}</h4>
                        <p style={myStyles.detailItemText}>{projects[activeProject].stack.split(': ')[1]}</p>
                    </div>
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
        projectTabs: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '15px',
            marginBottom: '30px',
            justifyContent: 'center',
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
            flexBasis: isMobile ? 'auto' : '33%',
            flexGrow: isMobile ? 0 : 1,
        },
        activeTab: {
            borderColor: `${theme.getForegroundColor()}80`,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
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
        },
        tabTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            overflow: 'hidden',
        },
        tabTitle: {
            color: theme.getForegroundColor(),
            fontSize: '16px',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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

export default Projects; 