import React, { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        document.title = "About | Marvel App";
    });

    return (
        <>
            <h2>About Us</h2>
            <p>We are a team of Marvel fans who love to create awesome apps!</p>
        </>
    );
};

export default AboutPage;
