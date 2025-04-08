import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import soon from '../../assets/images/soon.png'

export default function HomeContent() {
    const textArray = ["Quiz", "Fun", "Learn", "Challenge"];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentText = textArray[currentIndex];

    useEffect(() => {
        const handleScroll = () => {
            const image = document.querySelector(".home_image");
            if (!image) return;
    
            const rect = image.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element that is visible
            const visiblePercentage = Math.min(
                Math.max((windowHeight + rect.top) / windowHeight, 0),
                1
            );
    
            // Use the visible percentage to transform the element
            const translateY = 50 * (1 - visiblePercentage); // Adjust the multiplier as needed
            image.style.transform = `translateY(-${translateY}%)`;
            image.style.opacity = visiblePercentage; // Optional: adjust opacity based on visibility
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="home" id="">
            <div className="home_content">
                <div className="home_info">
                    <h1>
                        The Ultimate <span id="color">Quiz Experience.</span>{" "}
                        <br />
                        Just <span className="slide-up">{currentText}</span>
                    </h1>
                    <p>
                        Quizey is your go-to app for fun and engaging quizzes!
                        Test your knowledge on a variety of topics, challenge
                        your friends, and learn something new every day.
                        Download Quizey and start quizzing now!.
                    </p>
                    <div className="home_buttons">
                        <Link to="/panel">Get Started</Link>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>
                <div
                    className="home_image"
                    // style={{
                    //     background:
                    //         `url(${soon}) no-repeat center / cover`,
                    // }}
                >
                    COMING SOON
                    <div className="overlay"></div>
                </div>
            </div>
        </section>
    );
}
