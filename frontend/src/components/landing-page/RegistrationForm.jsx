import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { validateForm } from "../../utils/validation";
import { registrationFormStyles } from "./styles";
import { motion } from "framer-motion";

const RegistrationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setSubmitError("");

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            try {
                const response = await fetch("http://localhost:4000/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                await response.json();
            } catch (apiError) {
                console.log('API not available, simulating success:', apiError);
            }
            onSubmit(formData);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError("Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="registration-form" className={registrationFormStyles.section}>
            <div className={registrationFormStyles.container}>
                <div className={registrationFormStyles.header}>
                    <h2 className={registrationFormStyles.title}>
                        Register Now!
                    </h2>
                    <p className={registrationFormStyles.subtitle}>
                        Be the first to know about our exclusive offers and early access to the sale.
                    </p>
                </div>
                <motion.div
                    initial={{ x: 0, y: 100, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <form onSubmit={handleSubmit} className={registrationFormStyles.formContainer}>
                        <div className={registrationFormStyles.formFields}>
                            <div>
                                <label htmlFor="name" className={registrationFormStyles.label}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={registrationFormStyles.input(!!errors.name)}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <div className={registrationFormStyles.errorContainer}>
                                        <AlertCircle className={registrationFormStyles.errorIcon} />
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className={registrationFormStyles.label}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={registrationFormStyles.input(!!errors.email)}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <div className={registrationFormStyles.errorContainer}>
                                        <AlertCircle className={registrationFormStyles.errorIcon} />
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className={registrationFormStyles.label}>
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={registrationFormStyles.input(!!errors.phone)}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && (
                                    <div className={registrationFormStyles.errorContainer}>
                                        <AlertCircle className={registrationFormStyles.errorIcon} />
                                        {errors.phone}
                                    </div>
                                )}
                            </div>

                            {submitError && (
                                <div className={registrationFormStyles.submitErrorContainer}>
                                    <AlertCircle className={registrationFormStyles.errorIcon} />
                                    {submitError}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={registrationFormStyles.submitButton}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className={registrationFormStyles.loadingSpinner}></div>
                                        Submitting...
                                    </>
                                ) : (
                                    "Register for Early Access"
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationForm;