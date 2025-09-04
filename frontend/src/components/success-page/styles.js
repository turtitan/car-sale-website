import {
    PRIMARY_COLORS,
    TEXT_COLORS,
    BACKGROUND_COLORS,
    BUTTON_COLORS,
    ICON_COLORS
} from "../../constants/color.js";

export const layoutStyles = {
    container: "min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-black flex items-center justify-center p-4",
    content: "max-w-2xl mx-auto w-full",
};

export const typographyStyles = {
    h1: "text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4",
    paragraph: "text-base md:text-lg mb-6 md:mb-8 px-4",
    small: "text-xs md:text-sm mt-6 md:mt-8 text-gray-500 dark:text-gray-400",
};

export const iconStyles = {
    success: "w-8 h-8 md:w-12 md:h-12",
    car: "w-4 h-4 md:w-5 md:h-5",
    arrow: "w-4 h-4 md:w-5 md:h-5",
};

export const successStyles = {
    iconSection: "flex justify-center mb-6",
};

export const infoStyles = {
    header: "flex items-center justify-center gap-2 mb-3",
    title: "font-semibold text-sm md:text-base",
    list: "text-xs md:text-sm space-y-1 md:space-y-2 text-left",
    listItem: "flex items-start gap-2",
    bullet: "mt-1",
};

export const buttonStyles = {
    primary: "flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105",
    secondary: "font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105",
};

export const combinedStyles = {
    cardAnimated: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-12 transition-all duration-1000 opacity-100 translate-y-0 scale-100",
    cardHidden: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-12 transition-all duration-1000 opacity-0 translate-y-8 scale-95",

    iconContainerAnimated: `w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-700 delay-300 scale-100 ${PRIMARY_COLORS.successGreen}`,
    iconContainerHidden: "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-700 delay-300 scale-0 bg-green-100 dark:bg-green-900",

    messageSectionAnimated: "text-center transition-all duration-700 delay-500 opacity-100 translate-y-0",
    messageSectionHidden: "text-center transition-all duration-700 delay-500 opacity-0 translate-y-4",

    infoSectionAnimated: "rounded-lg p-4 md:p-6 mb-6 md:mb-8 transition-all duration-700 delay-700 opacity-100 translate-y-0 bg-blue-50 dark:bg-blue-900/20",
    infoSectionHidden: "rounded-lg p-4 md:p-6 mb-6 md:mb-8 transition-all duration-700 delay-700 opacity-0 translate-y-4 bg-blue-50 dark:bg-blue-900/20",

    actionSectionAnimated: "flex flex-col sm:flex-row gap-3 md:gap-4 justify-center transition-all duration-700 delay-900 opacity-100 translate-y-0",
    actionSectionHidden: "flex flex-col sm:flex-row gap-3 md:gap-4 justify-center transition-all duration-700 delay-900 opacity-0 translate-y-4",

    footerSectionAnimated: "text-center transition-all duration-700 delay-1100 opacity-100 translate-y-0",
    footerSectionHidden: "text-center transition-all duration-700 delay-1100 opacity-0 translate-y-4",
};

export const colorStyles = {
    headingLight: { color: TEXT_COLORS.headingLight },
    bodyLight: { color: TEXT_COLORS.bodyLight },

    iconSuccess: { color: ICON_COLORS.success },
    iconInfo: { color: ICON_COLORS.info },

    buttonPrimary: {
        backgroundColor: BUTTON_COLORS.primary,
        color: BACKGROUND_COLORS.white
    },
    buttonSecondary: {
        backgroundColor: BACKGROUND_COLORS.lightGray,
        color: TEXT_COLORS.bodyLight
    },

    infoTitle: { color: PRIMARY_COLORS.primaryBlue },
    infoText: { color: PRIMARY_COLORS.lightBlue },
    infoBullet: { color: PRIMARY_COLORS.primaryBlue },

    iconContainerBg: { backgroundColor: "#DCFCE7" }, 
    infoBackground: { backgroundColor: "#DBEAFE" }, 
};