import { useState } from 'react'
import './App.css'
import { questions } from './database'


interface ProgressBarProps {
  currentQuestion: number,
  totalNumberQuestion: number,
}

function ProgressBar({ currentQuestion, totalNumberQuestion }: ProgressBarProps) {
  const progress = currentQuestion * 100 / totalNumberQuestion;
  return (
    <div className='progress-container'>
      <div className='progress-track'>
        <div className='progress-fill' style={{ width: `${progress}%` }}></div>
        <div className='progress-percent' style={{ left: progress < 75 ? `calc(${progress}% + 16px)` : `70%` }}>{Math.round(progress)}%</div>
      </div>
      <div className='progress-count'>{currentQuestion} of {totalNumberQuestion}</div>
    </div>
  )
}

interface ContentProps {
  isShowQuestion: boolean,
  currentQuestion: number,
  totalNumberQuestion: number,
  onPrevious: () => void,
  onNext: () => void,
  onShowContent: () => void,
}

function Content({isShowQuestion, currentQuestion, totalNumberQuestion, onPrevious, onNext, onShowContent}: ContentProps) {
  const question = questions[currentQuestion - 1];
  return (
    <div className='content-container'>
      <div className='content-body'>
        <p>{isShowQuestion ? question[0] : question[1]}</p>
      </div>
      <div style={{ height: 10 }} />

      <div className='content-navigation-bottom'>
        <div className={currentQuestion < 2 ? 'disable' : 'enable'} onClick={onPrevious}>&lt; Previous</div>
        <div className='enable' onClick={onShowContent}>{isShowQuestion ? 'Show Answer' : 'Hide Answer'}</div>
        <div  className={currentQuestion == totalNumberQuestion? 'disable' : 'enable'} onClick={onNext}>Next &gt;</div>
      </div>
    </div>
  )
}

function App() {
  const totalNumberQuestion = 20;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isShowQuestion, setIsShowQuestion] = useState(true);

  function onPrevious() {
    if (currentQuestion < 2) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
    setIsShowQuestion(true);
  }

  function onNext() {
    if (currentQuestion == totalNumberQuestion) {
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setIsShowQuestion(true);
  }

  function onShowContent() {
    setIsShowQuestion(!isShowQuestion)
  }
  return (<div>
    <h1 className='app-name'>Flash Cards</h1>
    <ProgressBar currentQuestion={currentQuestion} totalNumberQuestion={totalNumberQuestion} />
    <div style={{ height: 10 }} />
    <Content isShowQuestion={isShowQuestion} currentQuestion={currentQuestion} totalNumberQuestion={totalNumberQuestion} onPrevious={onPrevious} onNext={onNext} onShowContent={onShowContent}/>
  </div>)
}

export default App
