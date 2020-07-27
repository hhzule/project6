import React from 'react';
import { AnswerObject } from '../App';
import style from './QC.module.css';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void ;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}
 
 const QuestionCard: React.FC<Props> =({
     question,
      answers, 
      callback,
       userAnswer, 
        questionNum,
         totalQuestions
         }) => {


return(
    <>
    <div className={style.card}>
    <p className='number'>
Question card: {questionNum}/ {totalQuestions}
</p>
<p dangerouslySetInnerHTML={{__html: question}} />
<div>
    {answers.map(answer => (
       <div key={answer}>
           <button className={style.options} disabled={userAnswer ? true : false} value={answer} onClick={callback}>
               <span dangerouslySetInnerHTML={{__html: answer}} />
           </button>
       </div>
    ))}
</div>
</div>
    </>

)

}
export default QuestionCard;