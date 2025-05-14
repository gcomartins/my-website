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
            title: intl.getCapivaraProject2Title(),
            subtitle: intl.getCapivaraProject2Description(),
            context: intl.getCapivaraProject2Context(),
            challenges: intl.getCapivaraProject2Challenges(),
            solutions: intl.getCapivaraProject2Solutions(),
            results: intl.getCapivaraProject2Results(),
            stack: intl.getCapivaraProject2Stack(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke={theme.getForegroundColor()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20"></path>
                    <path d="M5 20v-4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4"></path>
                    <path d="M12 13h4a2 2 0 0 1 2 2v5"></path>
                    <path d="M8 2l4 4 4-4"></path>
                    <path d="M12 6v8"></path>
                </svg>
            )
        }
    ];

    return (
        <div id="collaborative" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getCollaborativeWorkLabel()}</h2>
            <p style={myStyles.description} className="animate-fadeIn fade-delay-1">{intl.getCollaborativeWorkDescription()}</p>
            
            <div style={myStyles.projectDetail} className="animate-fadeIn fade-delay-2">
                <h3 style={myStyles.detailTitle}>{projects[0].title}</h3>
                <p style={myStyles.detailSubtitle}>{projects[0].subtitle}</p>
                
                <div style={myStyles.projectIconContainer}>
                    <div style={myStyles.projectIcon}>{projects[0].icon}</div>
                </div>
                
                <div style={myStyles.detailSection}>
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[0].context.includes(': ') 
                                ? projects[0].context.split(': ')[0] 
                                : 'Context'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[0].context.includes(': ') 
                                ? projects[0].context.split(': ')[1] 
                                : projects[0].context}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[0].challenges.includes(': ') 
                                ? projects[0].challenges.split(': ')[0] 
                                : 'Challenges'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[0].challenges.includes(': ') 
                                ? projects[0].challenges.split(': ')[1] 
                                : projects[0].challenges}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[0].solutions.includes(': ') 
                                ? projects[0].solutions.split(': ')[0] 
                                : 'Solutions'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[0].solutions.includes(': ') 
                                ? projects[0].solutions.split(': ')[1] 
                                : projects[0].solutions}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[0].results.includes(': ') 
                                ? projects[0].results.split(': ')[0] 
                                : 'Results'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[0].results.includes(': ') 
                                ? projects[0].results.split(': ')[1] 
                                : projects[0].results}
                        </p>
                    </div>
                    
                    <div style={myStyles.detailItem}>
                        <h4 style={myStyles.detailItemTitle}>
                            {projects[0].stack.includes(': ') 
                                ? projects[0].stack.split(': ')[0] 
                                : 'Tech Stack'}
                        </h4>
                        <p style={myStyles.detailItemText}>
                            {projects[0].stack.includes(': ') 
                                ? projects[0].stack.split(': ')[1] 
                                : projects[0].stack}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{``}</style>
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
        projectDetail: {
            backgroundColor: theme.getBackgroundColor(),
            borderRadius: '12px',
            padding: '25px',
            border: `1px solid ${theme.getForegroundColor()}20`,
            boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
            opacity: 1,
            transition: 'opacity 0.3s ease',
        },
        detailTitle: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '20px' : '24px',
            marginBottom: '5px',
            textAlign: 'center',
        },
        detailSubtitle: {
            color: `${theme.getForegroundColor()}90`,
            fontSize: '16px',
            marginBottom: '25px',
            fontStyle: 'italic',
            textAlign: 'center',
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
        },
        projectIconContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
        },
        projectIcon: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: `${theme.getForegroundColor()}10`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
        }
    }
};

export default Collaborative; 