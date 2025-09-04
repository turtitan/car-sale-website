

export const PRIMARY_COLORS = {
    primaryBlue: "#2563EB", 
    lightBlue: "#60A5FA", 
    successGreen: "#16A34A", 
    accentPurple: "#7C3AED", 
    warningYellow: "#EAB308", 
};

export const TEXT_COLORS = {
    headingLight: "#FFFFFF", 
    headingDark: "#111827", 
    bodyLight: "#4B5563", 
    bodyDark: "#D1D5DB", 
};

export const BACKGROUND_COLORS = {
    white: "#FFFFFF", 
    reallyLightGray: "#F9F4F6",
    lightGray: "#F9FAFB", 
    darkGray: "#1F2937", 
    charcoal: "#111827", 
    black: "#000000", 
    gradients: {
        appBackground: "linear-gradient(to bottom right, #DBEAFE, #E0E7FF)", 
        heroGradient: "linear-gradient(to right, #2563EB, #7C3AED)", 
        overlayGradient: "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))", 
    }
};

export const BUTTON_COLORS = {
    primary: "#2563EB", 
    primaryHover: "#1D4ED8", 
};

export const ICON_COLORS = {
    star: "#EAB308",
    info: "#3B82F6", 
    success: "#22C55E", 
    accent: "#7C3AED", 
};

export const FEATURE_CARD_COLORS = {
    quality: {
        background: "#DBEAFE", 
        icon: "#2563EB", 
    },
    pricing: {
        background: "#DCFCE7", 
        icon: "#16A34A", 
    },
    support: {
        background: "#F3E8FF", 
        icon: "#7C3AED", 
    },
};

export const NAV_COLORS = {
    linkDefault: "#4B5563", 
    linkHover: "#2563EB", 
    underline: "#2563EB", 
};

export const getColorWithOpacity = (color, opacity = 1) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}; 