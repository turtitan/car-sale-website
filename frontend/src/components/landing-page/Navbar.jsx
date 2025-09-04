import { useState, useEffect } from "react";
import { X, Menu, Car } from "lucide-react";
import { navbarStyles } from "./styles";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    const navItems = [
        { id: 'headline', label: 'Home' },
        { id: 'description', label: 'Description' },
        { id: 'registration-form', label: 'Register', isButton: true }
    ];

    const renderNavItem = (item) => {
        if (item.isButton) {
            return (
                <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className={navbarStyles.navButton}
                    style={navbarStyles.navButtonStyle}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = navbarStyles.navButtonHoverStyle.backgroundColor;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = navbarStyles.navButtonStyle.backgroundColor;
                    }}
                >
                    {item.label}
                </button>
            );
        }

        return (
            <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={navbarStyles.navLink}
                style={navbarStyles.navLinkStyle}
                onMouseEnter={(e) => {
                    e.target.style.color = navbarStyles.navLinkHoverStyle.color;
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = navbarStyles.navLinkStyle.color;
                }}
            >
                {item.label}
                <span
                    className={navbarStyles.navUnderline}
                    style={navbarStyles.navUnderlineStyle}
                ></span>
            </button>
        );
    };

    return (
        <nav
            className={navbarStyles.nav}
            style={navbarStyles.getNavStyle(scrolled)}
        >
            {/* Logo */}
            <div className={navbarStyles.logo}>
                <Car
                    className={navbarStyles.logoIcon}
                    style={navbarStyles.logoIconStyle}
                />
                <span
                    className={navbarStyles.logoText}
                    style={navbarStyles.logoTextStyle}
                >
                    CarSale
                </span>
            </div>

            <div className={navbarStyles.desktopNav}>
                {navItems.map(renderNavItem)}
            </div>

            <button
                className={navbarStyles.mobileMenuButton}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
            >
                <Menu
                    className={navbarStyles.mobileMenuIcon}
                    style={navbarStyles.mobileMenuIconStyle}
                />
            </button>

            <div
                className={navbarStyles.mobileSidebarOverlay(sidebarOpen)}
                style={navbarStyles.mobileSidebarOverlayStyle}
                onClick={() => setSidebarOpen(false)}
            >
                <div
                    className={navbarStyles.mobileSidebar(sidebarOpen)}
                    style={navbarStyles.mobileSidebarStyle}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={navbarStyles.mobileSidebarContent}>
                        {/* Mobile Header */}
                        <div className={navbarStyles.mobileHeader}>
                            <div className={navbarStyles.mobileLogo}>
                                <Car
                                    className={navbarStyles.mobileLogoIcon}
                                    style={navbarStyles.mobileLogoIconStyle}
                                />
                                <span
                                    className={navbarStyles.mobileLogoText}
                                    style={navbarStyles.mobileLogoTextStyle}
                                >
                                    CarSale
                                </span>
                            </div>
                            <button
                                className={navbarStyles.mobileCloseButton}
                                onClick={() => setSidebarOpen(false)}
                                aria-label="Close menu"
                            >
                                <X
                                    className={navbarStyles.mobileCloseIcon}
                                    style={navbarStyles.mobileCloseIconStyle}
                                />
                            </button>
                        </div>

                        <div className={navbarStyles.mobileNavItems}>
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.id)}
                                    className={navbarStyles.mobileNavItem}
                                    style={navbarStyles.getMobileNavItemStyle(item.isButton)}
                                    onMouseEnter={(e) => {
                                        const hoverStyle = navbarStyles.getMobileNavItemHoverStyle(item.isButton);
                                        if (hoverStyle.backgroundColor) {
                                            e.target.style.backgroundColor = hoverStyle.backgroundColor;
                                        }
                                        if (hoverStyle.color) {
                                            e.target.style.color = hoverStyle.color;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const defaultStyle = navbarStyles.getMobileNavItemStyle(item.isButton);
                                        e.target.style.backgroundColor = defaultStyle.backgroundColor;
                                        e.target.style.color = defaultStyle.color;
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;