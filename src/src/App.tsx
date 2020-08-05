import React, { useState } from 'react';
import  QuestionCard  from  './components/QuestionCard';
import { fetchQuestions } from './API';
import {QuestionState, Difficulty } from './API';
import { GlobalStyle } from './App.styles';
import style from './components/QC.module.css';
import './main.css';
import firebase from './firebase';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

 const App = () => {

 // firebase messaging
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token: any) => {
      console.log('token',token);
  })
  // firebase
const TOTAL_QUESTIONS = 10;
 

const [loading, setLoading] = useState(false);
 const [questions, setQuestions ] = useState<QuestionState[]>([]);
 const [number, setNumber ] = useState(0);
 const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
 const [score, setScore] = useState(0);
 const [gameOver, setGameOver] = useState(true);

console.log(score);
 
 const startQuiz = async() => {
   setLoading(true);
   setGameOver(false);

   const newQuestions = await fetchQuestions(
     TOTAL_QUESTIONS,
     Difficulty.Easy,
   );

   setQuestions(newQuestions);
   setScore(0);
   setUserAnswers([]);
   setNumber(0);
   setLoading(false);

 };

 const nextQuestion = async() =>{
      const nextQuestion = number + 1;
      if (nextQuestion === TOTAL_QUESTIONS){
        setGameOver(true);
      }else{
        setNumber(nextQuestion);
      }

 };

 const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
   if(!gameOver){
     const answer = e.currentTarget.value;
     const correct = questions[number].correct_answer === answer;
     if(correct) setScore((prev) => prev +1);
     const answerObject = {
       question: questions[number].question,
       answer,
       correct,
       correctAnswer: questions[number].correct_answer,
     };

     setUserAnswers((prev) => [...prev,answerObject]);

   }
 };
  
 
 return (
   <>
   <GlobalStyle />
    <div className="App">
    <h1 className="title"> Quiz App </h1>
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
    <button className={style.start} onClick={startQuiz}>
      Start
    </button> ) : null}

    
   { loading &&  <p>Loading ...</p> }
   {!loading && !gameOver && (
    <QuestionCard
       questionNum={number + 1}
       totalQuestions={TOTAL_QUESTIONS}
       question={questions[number].question}
       answers={questions[number].answers}
       userAnswer={userAnswers? userAnswers[number] : undefined}
       callback={checkAnswer}
      />)}
      {!gameOver && !loading && userAnswers.length === number+1 && number!== TOTAL_QUESTIONS-1 ? ( <button className={style.next} onClick={nextQuestion}>Next</button>
    
    ): null}
    { !gameOver ?  <p className='score'>Score : {score}</p> : null}
   
      <div className="socket">
    <div className="gel center-gel">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c1 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c2 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c3 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c4 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c5 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c6 r1">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    
    <div className="gel c7 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    
    <div className="gel c8 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c9 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c10 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c11 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c12 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c13 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c14 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c15 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c16 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c17 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c18 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c19 r2">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
     <div className="gel c20 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c21 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c22 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c23 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c24 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c25 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c26 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c28 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c29 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c30 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c31 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c32 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c33 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c34 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c35 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c36 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c37 r3">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
  
  </div>
     </div>
     </>
  );
}

export default App;
