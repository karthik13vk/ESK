import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import footerlogo from './../../assets/img/footerlogo.png';
const socialIcons = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/esk2photography/" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/keerthivasneskncc" },
    // { icon: <FaTwitter />, href: "#" },
    // { icon: <FaPinterestP />, href: "#" },
];
const Footer = () => {
    return (
        <footer className="relative px-6 py-20 overflow-hidden text-white bg-black md:px-24">
            {/* Background Image with overlay */}
            <div className="relative inset-0 z-0 bg-center bg-cover opacity-20 blur-sm" style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}></div>
            <div className="relative inset-0 z-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 gap-12 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <h2 className="mb-4 font-serif text-3xl font-bold">
                    <img src={footerlogo} alt="img" />
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Capturing authentic moments through our lens, one frame at a time.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold tracking-wide uppercase">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="text-white transition-all duration-200 text hover:text-primary ">Portfolio</a></li>
                        <li><a href="#" className="text-white transition-all duration-200 text hover:text-primary ">Services</a></li>
                        <li><a href="#" className="text-white transition-all duration-200 text hover:text-primary ">About Us</a></li>
                        <li><a href="#" className="text-white transition-all duration-200 text hover:text-primary ">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold tracking-wide uppercase">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Email: <a href="mailto:esk2photography@gmail.com
" className="text-white hover:text-primary ">esk2photography@gmail.com
</a></li>
                        <li>Phone: <a href="tel:+91 8220139675" className="text-white hover:text-primary "> (+91) 8220139675</a></li>
                        <li>India, Erode</li>
                    </ul>
                </div>

                {/* Newsletter + Social */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold tracking-wide uppercase">Stay Updated</h3>


                    {/* Social Icons */}
                    <div className="flex mt-6 space-x-3">

                        {socialIcons.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-white/10 hover:bg-white/20"
                            >
                                {React.cloneElement(item.icon, {
                                    className: "text-white text-lg",
                                })}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="relative z-10 pt-6 mt-16 text-sm text-center text-gray-500 border-t border-white/10">
                &copy; {new Date().getFullYear()} ESKStudio. Crafted with ❤️ for photographers.
            </div>
        </footer>
    );
};

export default Footer;
