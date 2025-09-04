import { useState, useEffect } from "react";
import { CheckCircle, ArrowLeft, Car } from "lucide-react";
import {
    layoutStyles,
    typographyStyles,
    iconStyles,
    successStyles,
    infoStyles,
    buttonStyles,
    combinedStyles,
    colorStyles,
} from "./styles";

const SuccessPage = ({ setCurrentPage }) => {
    const [animateContent, setAnimateContent] = useState(false);

    useEffect(() => {
        setAnimateContent(true);
    }, []);

    const nextSteps = [
        "You'll receive a confirmation email within 24 hours",
        "Early access to our exclusive car inventory",
        "Special financing options and discounts",
        "Priority booking for test drives"
    ];

    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <div className={animateContent ? combinedStyles.cardAnimated : combinedStyles.cardHidden}>
                    {/* Success Icon */}
                    <div className={successStyles.iconSection}>
                        <div 
                            className={animateContent ? combinedStyles.iconContainerAnimated : combinedStyles.iconContainerHidden}
                            style={colorStyles.iconContainerBg}
                        >
                            <CheckCircle 
                                className={iconStyles.success}
                                style={colorStyles.iconSuccess}
                            />
                        </div>
                    </div>

                    {/* Success Message */}
                    <div className={animateContent ? combinedStyles.messageSectionAnimated : combinedStyles.messageSectionHidden}>
                        <h1 
                            className={typographyStyles.h1}
                            style={colorStyles.headingLight}
                        >
                            Registration Successful!
                        </h1>
                        
                        <p 
                            className={typographyStyles.paragraph}
                            style={colorStyles.bodyLight}
                        >
                            Thank you for registering for our exclusive car sale event. We'll be in touch soon with more details about the sale and early access opportunities.
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div 
                        className={animateContent ? combinedStyles.infoSectionAnimated : combinedStyles.infoSectionHidden}
                        style={colorStyles.infoBackground}
                    >
                        <div className={infoStyles.header}>
                            <Car 
                                className={iconStyles.car}
                                style={colorStyles.iconInfo}
                            />
                            <h3 
                                className={infoStyles.title}
                                style={colorStyles.infoTitle}
                            >
                                What's Next?
                            </h3>
                        </div>
                        <ul 
                            className={infoStyles.list}
                            style={colorStyles.infoText}
                        >
                            {nextSteps.map((step, index) => (
                                <li key={index} className={infoStyles.listItem}>
                                    <span 
                                        className={infoStyles.bullet}
                                        style={colorStyles.infoBullet}
                                    >•</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className={animateContent ? combinedStyles.actionSectionAnimated : combinedStyles.actionSectionHidden}>
                        <button
                            onClick={() => setCurrentPage("home")}
                            className={buttonStyles.primary}
                            style={colorStyles.buttonPrimary}
                        >
                            <ArrowLeft className={iconStyles.arrow} />
                            Back to Home
                        </button>
                        
                        <button
                            onClick={() => window.open("mailto:support@carsale.com", "_blank")}
                            className={buttonStyles.secondary}
                            style={colorStyles.buttonSecondary}
                        >
                            Contact Support
                        </button>
                    </div>

                    {/* Footer Note */}
                    <div className={animateContent ? combinedStyles.footerSectionAnimated : combinedStyles.footerSectionHidden}>
                        <p className={typographyStyles.small}>
                            Questions? Email us at support@carsale.com or call (555) 123-4567
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage; 