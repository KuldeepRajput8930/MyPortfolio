import './FAQSection.css'
import { useState } from 'react';

const FAQSection = () => {
    const [activeAnswer, setActiveAnswer] = useState(null)

    const handleActive = function (e) {
        if (activeAnswer === null) {
            setActiveAnswer(e)
        }
        else if (activeAnswer === e) {
            setActiveAnswer(null)
        }
        else {
            setActiveAnswer(e)
        }
    }

    return (
        <div className="faq-container">
            <div className="title">
                <h1>FAQ</h1>
                <p>
                    Here some of the most important questions that clients usually ask me.
                    If you have any other question, please{" "}
                    <a href="/" className="link-styles">
                        Contact Me
                    </a>
                </p>
            </div>

            <div className="question">
                <div className={activeAnswer === 1 ? "active" : "row"} onClick={() => { handleActive(1) }}>
                    <span >
                        <h2>Can you design custom websites or other projects?</h2>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </span>
                    <p>
                        Sure, thats what I mostly do. 80% of my previous clinets wanted
                        custom websites.
                    </p>
                </div>
                <hr />
                <div className={activeAnswer === 2 ? "active" : "row"} onClick={() => { handleActive(2) }}>
                    <span>
                        <h2>How can I get in touch with you?</h2>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </span>
                    <p>
                        You can Contact Me here anytime you want. Or contact me in any of my
                        social media platforms that are provides below :
                    </p>
                </div>
                <hr />
                <div className={activeAnswer === 3 ? "active" : "row"} onClick={() => { handleActive(3) }}>
                    <span>
                        <h2>What types of websites do you build?</h2>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </span>
                    <p>
                        Basically any type. Most common ones I design are Full-Stack
                        websites for businesses that want to grow online with a beautiful
                        website. I can also create personal website, Admin Dashboard
                        (Managing system), SaaS, Data websites, etc.
                    </p>
                </div>
                <hr />
                <div className={activeAnswer === 4 ? "active" : "row"} onClick={() => { handleActive(4) }}>
                    <span>
                        <h2>What do you use to design and develop your websites?</h2>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </span>
                    <p>
                        About the design I mostly use Figma. And about the development I
                        mostly use React.JS with Tailwind CSS or Styled-Components, and
                        about the back-end I use Firebase or ASP.NET. It all depends on the
                        type of projects.
                    </p>
                </div>
            </div>
        </div >
    );
};


export default FAQSection;

