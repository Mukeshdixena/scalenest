import React from 'react';

function Contact() {
    return (
        <section id="contact" className="section contact">
            <h2>Contact Us</h2>
            <p>Have a project in mind? Fill the form and our team will get back to you.</p>
            <a
                href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
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
