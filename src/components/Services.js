import React from 'react';

function Services() {
    return (
        <section className="section our-services">
            <h2>Our Services</h2>
            <p className="subtitle">Transforming IT Challenges into Solutions: Elevate Your Business with Our Expert Services and Innovative Technology Solutions.</p>

            <div className="service-cards">
                {[
                    {
                        icon: "💻",
                        title: "Web Application Development",
                        desc: "From simple websites to complex web apps, we build user-friendly, responsive, and feature-rich solutions that engage your audience."
                    },
                    {
                        icon: "📱",
                        title: "Mobile App Development",
                        desc: "Custom mobile apps for iOS and Android that deliver seamless experiences and open up new growth opportunities."
                    },
                    {
                        icon: "👨‍💼",
                        title: "IT Staffing Solutions",
                        desc: "Align staffing with your business goals. Our experts ensure every team member adds meaningful value to your organization."
                    },
                    {
                        icon: "🎨",
                        title: "UI/UX Design",
                        desc: "Visually stunning, intuitive interfaces crafted to delight your users and improve app usability."
                    },
                    {
                        icon: "🧪",
                        title: "Quality Assurance & Testing",
                        desc: "We ensure your app works flawlessly with automated/manual testing and best practices in performance and security."
                    },
                    {
                        icon: "🚀",
                        title: "Product Engineering",
                        desc: "We help build next-gen digital products using ML, cloud, analytics, and rapid prototyping with real-world acceleration."
                    }
                ].map((service, idx) => (
                    <div className="service-card" key={idx}>
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
