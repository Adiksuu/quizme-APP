import React, { useEffect } from "react";

export default function FeaturesList() {
    const features = [
        {
            name: "Vast Quiz Library",
            text: "Endless entertainment and knowledge! Choose from a massive library of quizzes that's constantly updated with new topics.",
        },
        {
            name: "Create Your Own Quizzes",
            text: "Become a quiz creator! Use our easy-to-use tools to build the perfect quiz tailored to your interests.",
        },
        {
            name: "Statistics & Progress Tracking",
            text: "Measure your knowledge! Monitor your progress, identify areas for improvement, and celebrate your achievements.",
        },
        {
            name: "Regular Updates",
            text: "Always fresh and exciting quizzes! We regularly add new quizzes and features to keep your experience thrilling.",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const features = document.querySelectorAll(".feature");
            features.forEach((feature) => {
                const rect = feature.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    feature.classList.add("animate");
                } else {
                    feature.classList.remove("animate");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function Feature({ feature }) {
        return (
            <div className="feature">
                <h3>{feature.name}</h3>
                <p>{feature.text}</p>
            </div>
        );
    }

    return (
        <div className="features_list">
            {features.map((feature, i) => (
                <Feature key={i} feature={feature} />
            ))}
        </div>
    );
}
