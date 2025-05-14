interface Intl {
    getTitle() : string
    getDescription(): string
    getMyMainTechnologies(): string
    getChangeThemeLabel(): string
    getChangeLanguageLabel(): string
    getFirstTechLabel(): string
    getSecondTechLabel(): string
    getThirdTechLabel(): string
    getFourthTechLabel(): string
    getAboutMeLabel(): string
    getMyExperienceLabel(): string
    getMyProjectsLabel(): string
    getTooltipOnImageLabel(): string
    getExperienceItemTrademapTitle(): string
    getExperienceItemTrademapPeriod(): string
    getExperienceItemTrademapDescription(): string
    getExperienceItemBBTitle(): string
    getExperienceItemBBPeriod(): string
    getExperienceItemBBDescription(): string
    getContactMeLabel(): string
    getProjectsDescription(): string
    getProjectDesignSystemTitle(): string
    getProjectDesignSystemDescription(): string
    getProjectJetpackComposeTitle(): string
    getProjectJetpackComposeDescription(): string
    getProjectSecurityTitle(): string
    getProjectSecurityDescription(): string
    
    // Enhanced About Me section
    getAboutMeEnhancedDescription(): string
    getAboutMeProfileLabel(): string
    getAboutMeTechnicalProfile(): string
    getAboutMeCollaborationProfile(): string
    getAboutMeCareerGoals(): string
    
    // Enhanced Projects section
    getProjectsEnhancedDescription(): string
    getProjectDesignSystemEnhancedTitle(): string
    getProjectDesignSystemEnhancedDescription(): string
    getProjectDesignSystemContext(): string
    getProjectDesignSystemChallenges(): string
    getProjectDesignSystemSolutions(): string
    getProjectDesignSystemResults(): string
    getProjectDesignSystemStack(): string
    
    getProjectJetpackComposeEnhancedTitle(): string
    getProjectJetpackComposeEnhancedDescription(): string
    getProjectJetpackComposeContext(): string
    getProjectJetpackComposeChallenges(): string
    getProjectJetpackComposeSolutions(): string
    getProjectJetpackComposeResults(): string
    getProjectJetpackComposeStack(): string
    
    getProjectSecurityEnhancedTitle(): string
    getProjectSecurityEnhancedDescription(): string
    getProjectSecurityContext(): string
    getProjectSecurityChallenges(): string
    getProjectSecuritySolutions(): string
    getProjectSecurityResults(): string
    getProjectSecurityStack(): string
    
    // Technical Skills section
    getSkillsTitle(): string
    getMobileSkillsTitle(): string
    getMobileSkillsDescription(): string
    getDesignTokensTitle(): string
    getDesignTokensDescription(): string
    getSecuritySkillsTitle(): string
    getSecuritySkillsDescription(): string
    getNetworkingTitle(): string
    getNetworkingDescription(): string
    getToolsTitle(): string
    getToolsDescription(): string
    getMethodologiesTitle(): string
    getMethodologiesDescription(): string
    
    // Contact section
    getContactDescription(): string
}

export default Intl