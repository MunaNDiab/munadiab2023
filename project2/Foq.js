
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';
import React, { useState } from 'react';
import joinus from './join us.jpg'
import charges_and_fees from './charges_and_fees.png'
import contest_winner from './contest_winner.png'
import no_access from './no_access.png'
import premium from './premium.png'
import feedback from './feedback.png'
import tips_and_submit from './tips_and_submit.png'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqData = [
        {
            question: 'How to become a member of this site?',
            answer: 'Just go to the Registration Form and create an account. It\'s totally free, for now!',
            image: 'join us.jpg',
        },
        {
            question: 'Will there be any subscription charges?',
            answer: 'This site is still in beta release, so for now, our site is totally free. When our site is published, it will cost only $3 for a monthly subscription, $30 for a yearly subscription, and for those early accesses, 30% discount!',
            image: 'charges_and_fees.png',
        },
        {
            question: 'How to view the recipes and tips? Will there be any charges for that?',
            answer: 'During the beta release, there are 2 types of content: free and prime. You can view any free content, and when the transaction function is ready, you can buy prime recipes.',
            image: 'premium.png',
        },
        {
            question: 'I am not a registered member of the site. Can I participate in the contest held?',
            answer: 'No, you can create your account and join us!',
            image: 'no_access.png',
        },
        {
            question: 'How to upload or post the recipes and tips?',
            answer: 'For recipes, on the top bar, just click on "Submit Recipe" and fill in your recipe. For tips, go to the home page, scroll to the bottom to the tips section, and fill in your tip.',
            image: 'tips_and_submit.png',
        },
        {
            question: 'How to post feedback?',
            answer: 'On the top bar, click on the "Feedback" button. This will open a form for you to fill out. Click "Submit" and we will happily receive and review it. We appreciate your feedback.',
            image: 'feedback.png',
        },
        {
            question: 'I have posted a recipe or a tip with respect to the contest. How can I know who is the winner?',
            answer: 'Check the latest news section in the main menu. Once the results are ready, we will publish them there.',
            image: 'contest_winner.png',
        },
    ];

    return (
        <div className="myDiv">
            <h2>F.A.Q</h2>
            {faqData.map((item, index) => (
                <div key={index}>
                    <button
                        className={`accordion ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </button>
                    <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        <p>{item.answer}</p>
                        {item.image && (
                            <img src={require(`./${item.image}`).default} alt="Girl in a jacket" align="right" width="200" height="200" />
                        )}
                    </div>
                    <br /><br />
                </div>
            ))}
        </div>
    );


};

export default FAQ;