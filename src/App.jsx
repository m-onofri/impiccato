import { useState } from 'react'
import './App.css'
import Question from './components/Question.jsx'

function App() {
  const [count, setCount] = useState(0)

  const questions_list = [
    {question: "Chi è l'autore del ciclo di romanzi della Fondazione?", answer: "Isaac Asimov"},
    {question: "In quale squadra gioca Gigio Donnarumma", answer: "Paris Saint German"},
    {question: "Chi è l'attuale primo ministro del governo italiano?", answer: "Giorgia Meloni"}
  ]

  return (
    <>
    <div id="container" className='flex flex-row w-[1024px] m-10 p-4 bg-gray-100 rounded-xl'>
      <div id="left-section" className='w-2/3 flex flex-col justify-between'>
        <Question
          currentQuestion={questions_list[0].question}
        ></Question>
        <div id="word" className='m-8 flex flex-row'>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 '></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          <div className='basis-1/12 h-16 mx-1 border-2 border-onyx bg-feldgrau'></div>
          
        </div>
        <div id="left-bottom" className='flex flex-row'>
          <div id="hangman" className='w-2/3 h-64 flex flex-row justify-center items-center'>
            <div className='w-[150px] h-[150px] border-2 border-black'></div>
          </div>
          <div id="timer-button" className='m-2 flex flex-col justify-between content-around w-1/3'>
            <div id="timer" className='border-2 border-black rounded-md text-5xl p-3'>01:00</div>
            <div id="counter" className='text-2xl p-3'>Question 1 of 10</div>
            <div id="next-button">
              <button className='bg-feldgrau text-platinum font-bold'>Next question</button>
            </div>
          </div>
        </div> 
      </div>
      <div id="right-section" className='w-1/3 border-l-4 border-onyx'>
        <div id="points" className='border-2 border-black m-2 py-2 px-6 text-left text-3xl'>Points: </div>
        <div id="letters" className='m-2 flex flex-row flex-wrap'>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
          <div className='h-16 px-3 py-1 basis-1/4'><img src="" alt="" /></div>
        </div>
      </div>
    </div>
      
      
    </>
  )
}

export default App
