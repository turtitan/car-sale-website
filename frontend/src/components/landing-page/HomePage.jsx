import { useState, useEffect } from "react";
import { Car, CheckCircle, Star, Users, Calendar } from "lucide-react";
import RegistrationForm from "./RegistrationForm";
import {
    layoutStyles,
    heroStyles,
    typographyStyles,
    iconStyles,
    badgeStyles,
    featureCardStyles,
    sectionStyles,
    colorStyles,
} from "./styles";
import { motion } from 'framer-motion';

const HomePage = ({ setCurrentPage }) => {
    const [animateHero, setAnimateHero] = useState(false);
    const [animateFeatures, setAnimateFeatures] = useState(false);

    const featureCards = [
        {
            title: 'Quality Guaranteed',
            description:
            'All vehicles undergo rigorous quality checks and come with comprehensive warranties.',
            icon: <CheckCircle className={iconStyles.mediumCheckCircle} style={colorStyles.primaryBlue} />,
            iconContainerClass: featureCardStyles.iconContainerBlue,
        },
        {
            title: 'Best Prices',
            description:
            'Exclusive discounts and financing options available for qualified buyers.',
            icon: <Star className={iconStyles.mediumStar} style={colorStyles.successGreen} />,
            iconContainerClass: featureCardStyles.iconContainerGreen,
        },
        {
            title: 'Expert Support',
            description:
            'Our team of automotive experts is here to help you find the perfect vehicle.',
            icon: <Users className={iconStyles.mediumUsers} style={colorStyles.accentPurple} />,
            iconContainerClass: featureCardStyles.iconContainerPurple,
        },
    ]

    useEffect(() => {
        setAnimateHero(true);
        const timer = setTimeout(() => setAnimateFeatures(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleFormSubmit = () => {
        setCurrentPage("success");
    };

    return (
        <div className={layoutStyles.container}>
            <section id="headline" className={heroStyles.section}>
                <div className={heroStyles.background} style={heroStyles.backgroundStyle}></div>
                <div className={layoutStyles.heroContainer}>
                    <div className={heroStyles.textCenterAnimated}>
                        <div className={heroStyles.carContainer}>
                            <Car
                                className={heroStyles.carAnimated(animateHero)}
                                style={colorStyles.primaryBlue}
                            />
                        </div>
                        <div className={heroStyles.contentAnimated(animateHero)}>
                            <h1
                                className={typographyStyles.h1}
                                style={colorStyles.headingDark}
                            >
                                <span style={colorStyles.primaryBlue}>Amazing</span> Car Sale
                            </h1>
                            <h2 className={typographyStyles.saleBanner}>
                                🚗 UP TO 50% OFF - LIMITED TIME ONLY! 🚗
                            </h2>
                            <p
                                className={typographyStyles.heroParagraph}
                                style={colorStyles.bodyDark}
                            >
                                Don't miss out on our exclusive car sale event! Premium vehicles at unbeatable prices.
                            </p>
                            <div className={badgeStyles.container}>
                                <div
                                    className={badgeStyles.item}
                                    style={colorStyles.badgeBackground}
                                >
                                    <Star
                                        className={iconStyles.smallStar}
                                        style={colorStyles.iconStar}
                                    />
                                    <span className={badgeStyles.text}>Premium Quality</span>
                                </div>
                                <div
                                    className={badgeStyles.item}
                                    style={colorStyles.badgeBackground}
                                >
                                    <Users
                                        className={iconStyles.smallUsers}
                                        style={colorStyles.iconInfo}
                                    />
                                    <span className={badgeStyles.text}>Trusted by 1000+</span>
                                </div>
                                <div
                                    className={badgeStyles.item}
                                    style={colorStyles.badgeBackground}
                                >
                                    <Calendar
                                        className={iconStyles.smallCalendar}
                                        style={colorStyles.iconSuccess}
                                    />
                                    <span className={badgeStyles.text}>Limited Time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section
                id="description"
                className={sectionStyles.description}
                style={colorStyles.backgroundWhite}
            >
                <div className={layoutStyles.sectionContainer}>
                    <div className={sectionStyles.contentAnimated(animateFeatures)}>
                        <h2
                            className={typographyStyles.h2}
                            style={colorStyles.headingDark}
                        >
                            Why Choose Our Car Sale?
                        </h2>
                        <p
                            className={sectionStyles.paragraphCentered}
                            style={colorStyles.bodyDark}
                        >
                            We've curated the finest selection of vehicles for our exclusive sale event.
                            Every car has been thoroughly inspected and comes with our quality guarantee.
                        </p>
                    </div>

                    <motion.div
                        className={featureCardStyles.grid}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {featureCards.length > 0 && featureCards.map((card, index) => (
                            <div
                                key={index}
                                className={featureCardStyles.cardAnimated(
                                animateFeatures,
                                featureCardStyles.delays[Object.keys(featureCardStyles.delays)[index]]
                                )}
                                style={colorStyles.backgroundLightGray}
                            >
                                <div
                                className={card.iconContainerClass}
                                style={colorStyles.backgroundLightGray}
                                >
                                {card.icon}
                                </div>
                                <h3 className={typographyStyles.h3} style={colorStyles.headingDark}>
                                {card.title}
                                </h3>
                                <p className={typographyStyles.paragraph} style={colorStyles.bodyDark}>
                                {card.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <RegistrationForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default HomePage;