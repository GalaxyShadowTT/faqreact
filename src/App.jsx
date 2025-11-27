import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importuj Card który pokazuje jedno pytanie i odpowiedz
import Card from './card.jsx'

function App() {

  //lista pytań z ich id pytaniem i odpowiedzia
  //kazdy taki obiekt będzie jedną Card
  const questions = [
    { id:1, question:"Jaką moc posiada Atsushi Nakajima?", answer:"Potrafi przemieniać się w białego tygrysa o nadludzkiej sile i regeneracji."},
    { id:2, question:"Kto był partnerem Dazai Osamu w Mafii Portowej zanim dołączył do Agencji Detektywistycznej?", answer:"Chuuya Nakahara."},
    { id:3, question:"Jak nazywa się organizacja, do której należy Ranpo Edogawa?", answer:"Zbrojna Agencja Detektywistyczna (Armed Detective Agency)."}
  ]

  //tu ogolnie struktora Card
  return (
    <>
      <div className='main'>
        <ul className='list'>
          {questions.map(
            (questions)=>(
              <>
              <Card question={questions.question} answer={questions.answer} id={questions.id}/>
              </>
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default App
