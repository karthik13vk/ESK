import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
    const phoneNumber = '918220139675';

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 p-2 text-white transition-all bg-green-500 rounded-full shadow-lg bottom-6 left-6 hover:bg-green-600"
            aria-label="Chat on WhatsApp"
        >
        <FaWhatsapp className='text-4xl'/>
        </a>
    );
};

export default WhatsAppFloat;
