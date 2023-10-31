import React, { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact | Marvel App";
    }, []);

    return (
        <>
            <h2>Contact Us</h2>
            <p>
                Feel free to contact us at <a href="mailto:marvelApp@gmail.com">marvelApp@gmail.com</a>
            </p>
        </>
    );
};

export default ContactPage;
