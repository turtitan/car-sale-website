// Form validation
export const validateForm = (formData) => {
    const errors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "Please enter a valid name";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = "Please enter a valid phone number";
    }

    return errors;
}; 