import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react'

export default function FAQList() {
    const [faqs, setFaqs] = useState([
        {
            title: 'How do I create my own quiz?',
            content: 'Creating a quiz on Quizey is easy! Simply navigate to the "Create Quiz" section, give your quiz a title and description, add questions, set the correct answers, and publish! You can also choose to make your quiz public or private.',
            enabled: false
        },
        {
            title: 'How can I challenge my friends to a quiz?',
            content: 'Once you\'ve found a quiz you like, you can share it directly with your friends through social media or by sending them a direct link. Challenge them to beat your score!',
            enabled: false
        },
        {
            title: 'Is Quizey free to use?',
            content: 'Yes, Quizey is free to play! We offer a wide selection of free quizzes. Some premium features or ad-free access may require a subscription, but there\'s plenty to enjoy without spending a dime.',
            enabled: false
        },
        {
            title: 'How do I track my progress and see my statistics?',
            content: 'Visit your profile page to view your quiz history, scores, and overall progress. You can also see how you rank against other players on the leaderboards.',
            enabled: false
        },
        {
            title: 'What types of quizzes are available on Quizey?',
            content: 'We offer quizzes on a huge variety of topics, including history, science, pop culture, sports, movies, music, and much more! We\'re constantly adding new quizzes, so there\'s always something new to discover.',
            enabled: false
        },
        {
            title: 'How often are new quizzes added to Quizey?',
            content: 'We add new quizzes on a regular basis, typically several times per week. Check back often to explore the latest content!',
            enabled: false
        },
        {
            title: 'Can I report a quiz if I find an error?',
            content: 'Yes, absolutely! If you spot an error or issue with a quiz, please use the "Report" button to let us know. We appreciate your help in making Quizey the best quiz app possible.',
            enabled: false
        },
        {
            title: 'How do I customize my profile?',
            content: 'You can customize your profile by adding a profile picture and bio. This helps other users get to know you and makes Quizey a more social experience.',
            enabled: false
        }
    ]);

    const handleFaqEnabled = (index) => {
        setFaqs(prevFaqs => {
            return prevFaqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, enabled: !faq.enabled };
                }
                return { ...faq, enabled: false };
            });
        });
    };

    // Zastosuj początkowe animacje tylko raz po załadowaniu komponentu
    useEffect(() => {
        const handleInitialAnimation = () => {
            const faqElements = document.querySelectorAll(".faq");
            faqElements.forEach((faq, index) => {
                // Dodaj klasę visible z lekkim opóźnieniem dla każdego elementu
                setTimeout(() => {
                    faq.classList.add("visible");
                }, index * 100);
            });
        };

        handleInitialAnimation();
    }, []);

    // Detekcja widoczności oparta na przewijaniu (oddzielona od animacji)
    useEffect(() => {
        const handleScroll = () => {
            const faqElements = document.querySelectorAll(".faq");
            faqElements.forEach((faq) => {
                const rect = faq.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    faq.classList.add("visible");
                } else {
                    faq.classList.remove("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Uruchom raz po zamontowaniu, aby sprawdzić początkową widoczność
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function FAQItem({ faq, index }) {
        const contentRef = useRef(null);
        
        const toggleFaq = (e) => {
            e.preventDefault();
            handleFaqEnabled(index);
        };

        return (
            <div className="faq visible" onClick={toggleFaq}>
                <div 
                    className="faq_top" 
                    role="button"
                    tabIndex={0}
                >
                    <h3>{faq.title}</h3>
                    <button type="button">
                        <FontAwesomeIcon icon={faq.enabled ? faChevronUp : faChevronDown} />
                    </button>
                </div>
                <div 
                    className={`faq_info ${faq.enabled ? 'faq_info_open' : 'faq_info_closed'}`}
                    style={{ 
                        maxHeight: faq.enabled ? (contentRef.current ? contentRef.current.scrollHeight + 'px' : 'none') : '0',
                    }}
                >
                    <div ref={contentRef}>
                        <p>{faq.content}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="faq_list">
            {faqs.map((faq, index) => (
                <FAQItem key={index} index={index} faq={faq} />
            ))}
        </div>
    );
}