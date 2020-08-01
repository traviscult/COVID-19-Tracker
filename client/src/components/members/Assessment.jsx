import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import './assessments.css';

const Assessment = () => {
  const [questionsObject, setQuestionsObject] = useState({
    items: [],
    text: "",
    type: "",
    choices: [],
  })
  //console.log(questionsObject)

  const [storedAnswers, setStoredAnswers] = useState([])

  useEffect(() => {
    //console.log("This is being called")
    API.getQuestions().then(res => {
      //console.log("assessment", res.data)
      const response = res.data.question
      setQuestionsObject(response)
      const answerArray = response.items.map(question => {
        return { id: question.id, choice_id: "absent" }
      })
      // console.log("ans arry", answerArray)
      setStoredAnswers(answerArray);
    })

  }, [])

  const checkedAnswer = (e) => {
    const id = e.target.id;
    const foundAnswer = storedAnswers.find(answer => answer.id === id)
    // console.log("found answer", foundAnswer)
    // foundAnswer.choice_id="absent"
    const newAnswer = foundAnswer.choice_id === "present" ? "absent" : "present";
    const filteredArray = storedAnswers.filter(answer => answer.id !== id)
    // console.log("filter", filteredArray)
    filteredArray.push({ id: id, choice_id: newAnswer })
    //console.log("filter2", filteredArray)
    setStoredAnswers(filteredArray)
  }

  const groupMultiple = (items) => {
    //console.log("what we are printing", questionsObject.items)
    return <form id="answerCheckBoxes">
      <ul>{questionsObject.items.map((question, i) =>
        <label key={i} className="checkText">{question.name}
          <input onClick={checkedAnswer} id={question.id} type="checkbox" />
          <span className="checkmark">
          </span>
        </label>
      )}
      </ul>
    </form>

  }

  const groupSingle = (items) => {
    return <div>
      <ul>{questionsObject.items.map((question, i) =>
        <label key={i} className="checkText">{question.name}
          <input id={question.id} type="checkbox" />
          <span className="checkmark">
          </span>
        </label>
      )}
      </ul>
    </div>
  }

  const single = () => {
    return <div>
      <button type="button" data-value="true" className="next-question btn btn-success">Yes</button>
      <button type="button" data-value="false" className="next-question btn btn-danger">No</button>
      <button type="button" data-value="unknown" className="next-question btn btn-info">Skip question</button>
    </div>
  }

  const nextQuestion = async (e) => {
    //console.log("I am being clicked!!",)
    e.preventDefault();
    //console.log("on click store", storedAnswers)
    const res = await API.postAnswers(storedAnswers);
    //console.log("onclick res", res)
    const response = res.data.question
    setQuestionsObject(response)
    const answerArray = response.items.map(question => {
      return { id: question.id, choice_id: "absent" }
    })
    //console.log("ans arry", answerArray)
    setStoredAnswers(answerArray);
    document.getElementById("answerCheckBoxes").reset();

  }

  return (

    <div className="col-sm-12 assessmentCol">
      <h5> Assess Your COVID-19 Risk</h5>
      <br></br>
      <p className="text-center">Answer few questions to find out your symptoms and risk factors of the COVID-19. </p>
      <hr />
      {/* <Questionnaire /> */}
      <p className="font-weight-bold">{questionsObject.text}.</p>
      <br></br>
      <div>
        {questionsObject.type === 'single' ? single() :
          questionsObject.type === 'group_multiple' ? groupMultiple() :
            groupSingle()}
        {questionsObject.type !== 'single' ?
          <div className="nextBtnWrapper"> <button onClick={nextQuestion} className="next-question btn">Next question</button> </div> : ''}
      </div>
    </div>

  )
}
export default Assessment;