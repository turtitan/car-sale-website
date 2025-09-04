// Color Constants for Car Sale Website
// Centralized color management with specific, descriptive names

// Primary Brand Colors - Specific names
export const PRIMARY_COLORS = {
    primaryBlue: "#2563EB", // Main brand blue
    lightBlue: "#60A5FA", // Light blue for accents
    successGreen: "#16A34A", // Success/positive actions
    accentPurple: "#7C3AED", // Purple accent
    warningYellow: "#EAB308", // Warning/highlight color
};

// Text Colors - Specific names
export const TEXT_COLORS = {
    headingLight: "#111827", // Dark gray for headings in light mode
    headingDark: "#FFFFFF", // White for headings in dark mode
    bodyLight: "#4B5563", // Medium gray for body text in light mode
    bodyDark: "#D1D5DB", // Light gray for body text in dark mode
};

// Background Colors - Specific names
export const BACKGROUND_COLORS = {
    white: "#FFFFFF", // Pure white
    lightGray: "#F9FAFB", // Very light gray
    darkGray: "#1F2937", // Dark gray
    charcoal: "#111827", // Very dark gray/charcoal
    black: "#000000", // Black
    gradients: {
        appBackground: "linear-gradient(to bottom right, #DBEAFE, #E0E7FF)", // Main app background
        heroGradient: "linear-gradient(to right, #2563EB, #7C3AED)", // Hero section gradient
        overlayGradient: "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))", // Overlay gradient
    }
};

// Button Colors - Specific names
export const BUTTON_COLORS = {
    primary: "#2563EB", // Primary button color
    primaryHover: "#1D4ED8", // Primary button hover state
};

// Icon Colors - Specific names
export const ICON_COLORS = {
    star: "#EAB308", // Star/warning icon
    info: "#3B82F6", // Info icon
    success: "#22C55E", // Success icon
    accent: "#7C3AED", // Accent icon
};

// Feature Card Colors - Specific names
export const FEATURE_CARD_COLORS = {
    quality: {
        background: "#DBEAFE", // Quality card background
        icon: "#2563EB", // Quality card icon
    },
    pricing: {
        background: "#DCFCE7", // Pricing card background
        icon: "#16A34A", // Pricing card icon
    },
    support: {
        background: "#F3E8FF", // Support card background
        icon: "#7C3AED", // Support card icon
    },
};

// Navigation Colors - Specific names
export const NAV_COLORS = {
    linkDefault: "#4B5563", // Default link color
    linkHover: "#2563EB", // Link hover color
    underline: "#2563EB", // Navigation underline
};

// Utility function to get color with opacity
export const getColorWithOpacity = (color, opacity = 1) => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}; 