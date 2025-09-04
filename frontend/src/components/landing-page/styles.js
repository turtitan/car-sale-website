import {
    PRIMARY_COLORS,
    TEXT_COLORS,
    BACKGROUND_COLORS,
    ICON_COLORS,
    BUTTON_COLORS,
    NAV_COLORS,
    getColorWithOpacity
} from "../../constants/color";

export const layoutStyles = {
    container: "min-h-screen",
    heroContainer: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24",
    sectionContainer: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20",
};

export const registrationFormStyles = {
    section: "py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600",
    container: "max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12",

    header: "text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12",
    title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8",
    subtitle: "text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 px-4 leading-relaxed",

    formContainer: "bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12",
    formFields: "space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10",

    label: "block text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4",

    input: (hasError) => `w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl border-2 rounded-lg sm:rounded-xl focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors ${
        hasError ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'
    }`,

    errorContainer: "flex items-center gap-2 mt-2 sm:mt-3 text-red-600 dark:text-red-400 text-sm sm:text-base md:text-lg",
    errorIcon: "size-4 sm:size-5 md:size-6",

    submitErrorContainer: "flex items-center gap-2 text-red-600 dark:text-red-400 text-sm sm:text-base md:text-lg bg-red-50 dark:bg-red-900/20 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl",

    submitButton: "w-full bg-blue-600 hover:bg-blue-700 hover:border-radius-xl disabled:bg-blue-400 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 rounded-lg sm:rounded-xl transition duration-200 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-95 disabled:transform-none shadow-lg",
    loadingSpinner: "size-4 sm:size-5 md:size-6 border-2 sm:border-3 border-white border-t-transparent rounded-full animate-spin",
};

export const navbarStyles = {
    nav: "flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 sticky top-0 z-50 backdrop-blur-xl font-medium transition-all duration-300 shadow-lg",
    getNavStyle: (scrolled) => ({
        backgroundColor: scrolled
            ? getColorWithOpacity(BACKGROUND_COLORS.reallyLightGray, 0.9)
            : getColorWithOpacity(BACKGROUND_COLORS.white, 0.8),
    }),

    logo: "flex items-center gap-2 sm:gap-3",
    logoIcon: "size-6 sm:size-7 md:size-8 lg:size-10",
    logoIconStyle: { color: PRIMARY_COLORS.primaryBlue },
    logoText: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold",
    logoTextStyle: { color: TEXT_COLORS.logoTextColor },

    desktopNav: "hidden md:flex items-center gap-6 lg:gap-8",

    navButton: "px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105",
    navButtonStyle: {
        backgroundColor: BUTTON_COLORS.primary,
        color: BACKGROUND_COLORS.white,
    },
    navButtonHoverStyle: {
        backgroundColor: BUTTON_COLORS.primaryHover,
    },
    navLink: "transition-colors duration-200 relative group",
    navLinkStyle: { color: NAV_COLORS.linkDefault },
    navLinkHoverStyle: { color: NAV_COLORS.linkHover },
    navUnderline: "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full",
    navUnderlineStyle: { backgroundColor: NAV_COLORS.underline },

    mobileMenuButton: "md:hidden p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200",
    mobileMenuIcon: "size-5 sm:size-6 md:size-7",
    mobileMenuIconStyle: { color: NAV_COLORS.linkDefault },

    mobileSidebarOverlay: (sidebarOpen) => `fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
        sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`,
    mobileSidebarOverlayStyle: { backgroundColor: getColorWithOpacity(BACKGROUND_COLORS.black, 0.5), height: '100vh' },

    mobileSidebar: (sidebarOpen) => `absolute right-0 top-0 w-72 sm:w-80 md:w-96 shadow-2xl transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
    }`,
    mobileSidebarStyle: { backgroundColor: BACKGROUND_COLORS.white, height: '100vh' },
    mobileSidebarContent: "p-4 sm:p-6 md:p-8 h-full overflow-y-auto shadow-lg",

    mobileHeader: "flex justify-between items-center mb-6 sm:mb-8 md:mb-10",
    mobileLogo: "flex items-center gap-2 sm:gap-3",
    mobileLogoIcon: "size-6 sm:size-7 md:size-8",
    mobileLogoIconStyle: { color: PRIMARY_COLORS.primaryBlue },
    mobileLogoText: "text-lg sm:text-xl md:text-2xl font-bold",
    mobileLogoTextStyle: { color: TEXT_COLORS.headingLight },
    mobileCloseButton: "p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200",
    mobileCloseIcon: "size-4 sm:size-5 md:size-6",
    mobileCloseIconStyle: { color: NAV_COLORS.linkDefault },

    mobileNavItems: "space-y-3 sm:space-y-4 md:space-y-6",
    mobileNavItem: "w-full text-left py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-base sm:text-lg md:text-xl font-semibold",
    getMobileNavItemStyle: (isButton) => ({
        backgroundColor: isButton ? BUTTON_COLORS.primary : BACKGROUND_COLORS.transparent,
        color: isButton ? BACKGROUND_COLORS.white : NAV_COLORS.linkDefault,
    }),
    getMobileNavItemHoverStyle: (isButton) => ({
        backgroundColor: isButton ? BUTTON_COLORS.primaryHover : undefined,
        color: isButton ? undefined : NAV_COLORS.linkHover,
    }),
};

export const heroStyles = {
    section: "relative overflow-hidden",
    background: "absolute inset-0",
    backgroundStyle: {
        background: BACKGROUND_COLORS.gradients.overlayGradient,
    },
    textCenterAnimated: "text-center transition-all duration-1000",
    carContainer: "flex justify-center mb-8 sm:mb-10",
    carAnimated: (animateHero) => `size-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-bounce ${animateHero ? 'animate-bounce' : ''}`,
    contentAnimated: (animateHero) => `${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
};

export const typographyStyles = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight",
    h3: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6",
    paragraph: "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed",
    heroParagraph: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto px-4 leading-relaxed",
    accent: "font-bold",
    saleBanner: `text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 animate-pulse text-yellow-500`,
};

export const iconStyles = {
    smallStar: "size-4 sm:size-5 md:size-6 lg:size-7",
    smallUsers: "size-4 sm:size-5 md:size-6 lg:size-7",
    smallCalendar: "size-4 sm:size-5 md:size-6 lg:size-7",
    mediumCheckCircle: "size-6 sm:size-8 md:size-10 lg:size-12",
    mediumStar: "size-6 sm:size-8 md:size-10 lg:size-12",
    mediumUsers: "size-6 sm:size-8 md:size-10 lg:size-12",
};

export const badgeStyles = {
    container: "flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4",
    item: `flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl shadow-lg bg-opacity-90`,
    text: "font-semibold",
};

export const featureCardStyles = {
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12",
    delays: {
        first: "delay-500",
        second: "delay-700",
        third: "delay-900",
    },
    cardAnimated: (animateFeatures, delay) => `text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl transition-all duration-700 shadow-lg hover:shadow-xl transition-all duration-700 ${delay} ${animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
    iconContainerBlue: "size-12 sm:size-16 md:size-20 lg:size-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8",
    iconContainerGreen: "size-12 sm:size-16 md:size-20 lg:size-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8",
    iconContainerPurple: "size-12 sm:size-16 md:size-20 lg:size-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8",
};

export const sectionStyles = {
    description: "py-8 sm:py-12 md:py-16 lg:py-20",
    contentAnimated: (animateFeatures) => `text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
    paragraphCentered: "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4",
};

export const colorStyles = {
    headingLight: { color: TEXT_COLORS.headingLight },
    bodyLight: { color: TEXT_COLORS.bodyLight },

    iconStar: { color: ICON_COLORS.star },
    iconInfo: { color: ICON_COLORS.info },
    iconSuccess: { color: ICON_COLORS.success },

    backgroundWhite: { backgroundColor: BACKGROUND_COLORS.white },
    backgroundLightGray: { backgroundColor: BACKGROUND_COLORS.lightGray },

    primaryBlue: { color: PRIMARY_COLORS.primaryBlue },
    successGreen: { color: PRIMARY_COLORS.successGreen },
    accentPurple: { color: PRIMARY_COLORS.accentPurple },

    badgeBackground: { backgroundColor: BACKGROUND_COLORS.white },
};