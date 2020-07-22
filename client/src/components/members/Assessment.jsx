import React, {useState, useEffect} from 'react'
import API from "../../utils/API"

const Assessment = () => {
  const [questionsObject, setQuestionsObject] = useState({})


  useEffect(() => {
    console.log("This is being called")
    API.getQuestions().then(res => {
      console.log("assessment", res)
      const response = res.data.question
      console.log("useEffect res", response)
      setQuestionsObject(response)
      console.log("questions", questionsObject)
    })

  },[])



  return (
    <div className="bg-warning assessmentCol">
      <h3>{questionsObject.text}</h3>
    </div>
  )
}
export default Assessment;