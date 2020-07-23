
import React, {useState, useEffect} from 'react'
import API from "../../utils/API"
import Questionnaire from './Questionnaire';


const Assessment = () => {
  const [questionsObject, setQuestionsObject] = useState({
    items: [],
    text: "",
    choisces: []
  })


  useEffect(() => {
    console.log("This is being called")
    API.getQuestions().then(res => {
      // console.log("assessment", res)
      const response = res.data.question
      // console.log("useEffect res", response)
      setQuestionsObject(response)
      // console.log("questions", questionsObject)
    })

  },[])



  return (

    <div className="assessmentCol px-3 py-3">
      <h5> Assess Your COVID-19 Risk</h5>
      <h6>Answer a few questions to find out about the symptoms and risk factors of the COVID-19. </h6>
      <hr />
      {/* <Questionnaire /> */}
      <h4>{questionsObject.text}</h4>
      <br></br>
      <ul>
      <li>
          <label className="checkText"> {questionsObject.items[0] ? questionsObject.items[0].name : null }
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> {questionsObject.items[1] ? questionsObject.items[1].name : null }
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> {questionsObject.items[2] ? questionsObject.items[2].name : null }
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> {questionsObject.items[3] ? questionsObject.items[3].name : null }
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>

        </ul>
      {/* <p>{questionsObject.items[0] ? questionsObject.items[0].name : null }</p> */}
  {/* <p>{questionsObject.items[0] ? questionsObject.items[0].choices : null}</p> */}
    </div>
  )
}
export default Assessment;