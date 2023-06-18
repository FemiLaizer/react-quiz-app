import { useState } from "react";
import "./Question.css"

const Question = ({id, quest, answer, score, correct, addToScore, showScore}) => {

    const [ans, setAnswer] = useState("")
    let [mark, setMark] = useState(score)
    const {A, B, C, D} = {...answer}

    const updateScore = (id, e) => {
        if(e === correct && mark === 0){
            addToScore(id, mark = mark+1)
        }else{
            addToScore(id, mark = 0)
        }
        
        setMark(mark)
        setAnswer(e)
    }

    // console.log(question.correct === answer ?  =+ 1 : "Wrong answer");
    return(
        <div className="Question">
        <p className="quest">{id}.    {quest}</p>
        
        <p>
        <input type="radio" name={id} value={A} onChange={(e) => updateScore(id, e.currentTarget.value)} />{A}
        </p>
        <p>
        <input type="radio" name={id} value={B} onChange={(e) => updateScore(id, e.currentTarget.value)} />{B}
        </p>
        <p>
        <input type="radio" name={id} value={C} onChange={(e) => updateScore(id, e.currentTarget.value)} />{C}
        </p>
        <p>
        <input type="radio" name={id} value={D} onChange={(e) => updateScore(id, e.currentTarget.value)} />{D}
        </p>
        
        {showScore && <p>Correct answer: {correct}</p>}
        </div>
    )
}
export default Question;