import React from 'react';


const d = new Date();

const currentYear = d.getFullYear();
const Footer = () => (
    <footer>
        <a href="https://www.ezequielespinoza.dev/">© {currentYear}, Created by Ezequiel Espinoza</a>
    </footer>
)

export default Footer;
