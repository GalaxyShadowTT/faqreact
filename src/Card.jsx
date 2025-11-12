import { useState } from 'react'

function Card({id, question, answer}){
    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        window.dispatchEvent(new CustomEvent('hideAllAnswers', { detail: id }));
        setShowAnswer((prev) => !prev);
    }

    useState(() => {
        function handler(e) {
            if (e.detail !== id) setShowAnswer(false);
        }
        window.addEventListener('hideAllAnswers', handler);
        return () => window.removeEventListener('hideAllAnswers', handler);
    }, [id]);

    return (
        <li>
            <button onClick={handleClick}>
                <b className="question">{question}</b>
            </button>
            <p className="answer" id={id} style={{display: showAnswer ? "" : "none"}}>{answer}</p>
        </li>
    );
}
export default Card