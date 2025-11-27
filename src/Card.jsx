import { useState } from 'react'

//dane id, question, answer
function Card({id, question, answer}){
    //showAnswer false - schowana. True widoczna
    //setShowAnswer zmienia czy false czy true
    const [showAnswer, setShowAnswer] = useState(false);


    //sygnal przy kliknieciu do schowania innych odpowiedzi, by na pytanie ktore my klikniemy
    function handleClick() {
        window.dispatchEvent(new CustomEvent('hideAllAnswers', { detail: id }));
        setShowAnswer((prev) => !prev);
    }



    // część słucha sygnał hideAllAnswers
    
    // jeśli sygnał pochodzi z innej karty chowamy odpowiedz w tej karcie
    // jeśli sygnał jest z tej samej karty nic nie robimy
    useState(() => {
        
        // funkcja która reaguje n sygnały z innych kart
        function handler(e) {
            
            // jeśli to nie ta karta została kliknięta to schowa odpowiedz
            if (e.detail !== id) setShowAnswer(false);
        }
        window.addEventListener('hideAllAnswers', handler);
        return () => window.removeEventListener('hideAllAnswers', handler);
    }, [id]);



    // wygląd jednej karty
    // przycisk z pytanie
    // odpowiedz pokazuje sie jeśli showAnswer = true
    return (
        <li>
            <button onClick={handleClick}>
                <b className="question">{question}</b>
            </button>

            // jeśli showAnswer = true pokazujemy odpowiedz. jeśli false to display: none ukrywa odpowiedz
            <p className="answer" id={id} style={{display: showAnswer ? "" : "none"}}>{answer}</p>
        </li>
    );
}
export default Card
