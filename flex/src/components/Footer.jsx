import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
    <span>Jessica Kincaid &copy; {currentYear}</span>
    </div>
  );
};

export default Footer;