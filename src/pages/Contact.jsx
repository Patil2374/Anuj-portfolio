import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  // Ensure we start at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-[80vh] flex items-center">
      <ContactSection />
    </div>
  );
};

export default Contact;
