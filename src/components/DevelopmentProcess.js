import React from 'react';

function DevelopmentProcess() {
    const steps = [
        {
            icon: "⚙️",
            title: "Feasibility Study",
            desc: "Thorough assessment to determine project viability and success potential."
        },
        {
            icon: "💡",
            title: "Product Research",
            desc: "Comprehensive analysis to uncover insights and optimize product development.",
            highlight: true
        },
        {
            icon: "🧠",
            title: "Technical Specifications",
            desc: "Clear and detailed technical specifications for smooth project execution."
        },
        {
            icon: "🖌️",
            title: "Design",
            desc: "Creative design solutions that captivate and inspire your audience."
        },
        {
            icon: "💻",
            title: "Web Application Programming",
            desc: "Expert web app programming for seamless user experiences and functionality."
        },
        {
            icon: "📦",
            title: "Testing & Deployment",
            desc: "Thorough testing ensures smooth deployment and optimal performance."
        }
    ];

    return (
        <section className="section dev-process">
            <h2>Development Process</h2>
            <div className="process-cards">
                {steps.map((step, idx) => (
                    <div className={`process-card ${step.highlight ? 'highlighted' : ''}`} key={idx}>
                        <div className="icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DevelopmentProcess;
