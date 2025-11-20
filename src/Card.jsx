import { useState } from 'react'

//dane id, question, answer
function Card({id, question, answer}){
    //showAnswer false - schowana. True widoczna
    //setShowAnswer zmienia czy false czy true
    const [showAnswer, setShowAnswer] = useState(false);


    //sygnal przez klikniecie do schowania innych odpowiedzi, by na pytanie ktore my klikniemy
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
