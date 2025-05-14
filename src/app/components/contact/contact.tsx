import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import ThemeVariation from '../../theme/theme';
import Intl from '@/app/intl/language';

interface ContactProps {
    theme: ThemeVariation;
    intl: Intl
}

const Contact: React.FC<ContactProps> = ({ theme, intl }) => {
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

    const socialIcons = {
        github: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        ),
        linkedin: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        ),
        email: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        )
    };

    return (
        <div id="contact" style={myStyles.container}>
            <h2 style={myStyles.title} className="animate-fadeIn">{intl.getContactMeLabel()}</h2>
            
            <div style={myStyles.contactWrapper} className="animate-fadeIn fade-delay-1">
                <p style={myStyles.contactText}>
                    Interested in working together? Feel free to reach out through any of these channels:
                </p>
                
                <div style={myStyles.contactLinks}>
                    <a 
                        href="https://github.com/gcomartins" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={myStyles.link}
                        className="contact-link"
                    >
                        <span style={myStyles.iconWrapper}>{socialIcons.github}</span>
                        <span>GitHub</span>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/guilherme-martins-854325177/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={myStyles.link}
                        className="contact-link"
                    >
                        <span style={myStyles.iconWrapper}>{socialIcons.linkedin}</span>
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href="mailto:youremail@example.com" 
                        style={myStyles.link}
                        className="contact-link"
                    >
                        <span style={myStyles.iconWrapper}>{socialIcons.email}</span>
                        <span>Email</span>
                    </a>
                </div>
            </div>
            
            <div style={myStyles.footer} className="animate-fadeIn fade-delay-2">
                <p>© {new Date().getFullYear()} Guilherme Martins. All rights reserved.</p>
            </div>
        </div>
    );
};

const handleStyles = (theme: ThemeVariation, isMobile: boolean): Record<string, CSSProperties> => {
    return {
        container: {
            paddingLeft: isMobile ? "20px" : "40px",
            paddingRight: isMobile ? "20px" : "40px",
            paddingBottom: '40px',
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        title: {
            color: theme.getForegroundColor(),
            marginBottom: '30px',
            borderBottom: `2px solid ${theme.getForegroundColor()}`,
            paddingBottom: '10px',
            fontSize: isMobile ? '24px' : '28px',
            textAlign: 'center',
        },
        contactWrapper: {
            backgroundColor: theme.getBackgroundColor(),
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${theme.getForegroundColor()}10`,
            marginBottom: '40px',
        },
        contactText: {
            color: theme.getForegroundColor(),
            fontSize: isMobile ? '16px' : '18px',
            textAlign: 'center',
            marginBottom: '30px',
        },
        contactLinks: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '20px' : '30px',
        },
        link: {
            color: theme.getForegroundColor(),
            fontSize: '16px',
            textDecoration: 'none',
            padding: '15px 25px',
            borderRadius: '8px',
            border: `1px solid ${theme.getForegroundColor()}30`,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: isMobile ? '100%' : 'auto',
            justifyContent: 'center',
        },
        iconWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        footer: {
            color: theme.getForegroundColor(),
            opacity: 0.7,
            textAlign: 'center',
            fontSize: '14px',
            marginTop: '20px',
            padding: '20px 0',
            borderTop: `1px solid ${theme.getForegroundColor()}20`,
        }
    }
};

export default Contact; 