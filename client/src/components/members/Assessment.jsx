
import React, {useState, useEffect} from 'react'
import API from "../../utils/API"
import './questionnaire.css';
// import Questionnaire from './Questionnaire';


const Assessment = () => {
  const [questionsObject, setQuestionsObject] = useState({
    items: [],
    text: "",
    choices: []
  })
  console.log(questionsObject)

  useEffect(() => {
    console.log("This is being called")
    API.getQuestions().then(res => {
      console.log("assessment", res.data)
      const response = res.data.question
      // console.log("useEffect res", response)
      setQuestionsObject(response)
      // console.log("questions", questionsObject)
    })

  },[])

  const groupMultiple = (items) => {
  console.log("what we are printing", questionsObject.items)
  return <ul>{questionsObject.items.map(question => <label className="checkText">{question.name}<input type="checkbox" /><span className="checkmark"></span></label>)}</ul>
  }

  const groupSingle = (items) => {
    return <ul>{questionsObject.items.map(question => <label className="checkText">{question.name}<input type="checkbox" /><span className="checkmark"></span></label>)}</ul>

  }

  const single = () => {
    return  <div>
    <button type="button" data-value="true" className="next-question btn btn-success">Yes</button>
    <button type="button" data-value="false" className="next-question btn btn-danger">No</button>
    <button type="button" data-value="unknown" className="next-question btn btn-info">Skip question</button>
  </div>
  }

  return (

    <div className="assessmentCol px-3 py-3">
      <h5> Assess Your COVID-19 Risk</h5>
      <h6>Answer a few questions to find out about the symptoms and risk factors of the COVID-19. </h6>
      <hr />
      {/* <Questionnaire /> */}
      <h4>{questionsObject.text}</h4>
      <br></br>
      {groupMultiple()}
      
      
  {/* <ul>{questionsObject.items.map(question => <label className="checkText">{question.name}<input type="checkbox" /><span className="checkmark"></span></label>)}</ul>
  {console.log("what we are printing", questionsObject.items)} */}
  
        <button id="submit" type="button" className="btn nextBtn btn-primary">submit</button>
    </div>
  )
}
export default Assessment;