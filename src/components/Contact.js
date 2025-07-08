import React from 'react';

function Contact() {
    return (
        <section id="contact" className="section contact">
            <h2>Contact Us</h2>
            <p>Have a project in mind? Fill the form and our team will get back to you.</p>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyzY5k-yp8Mqaxp5P6AHRSb3QuniIb2DDI3NYyo9fAwkfs_Q/viewform"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
            >
                Open Contact Form
            </a>
        </section>
    );
}

export default Contact;
