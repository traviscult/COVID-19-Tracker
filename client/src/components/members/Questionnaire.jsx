import React from 'react';
import './questionnaire.css';

const Questionnaire = () => {
  return (
    <div className="questionnaireDiv">

      <p>Please select all that apply.</p>
      <ul>
        <li>
          <label className="checkText"> What questions to ask?
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Here are 10 question fields.
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> No "yes no" questions.
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Just check from the given options.
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 5
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 6
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 7: Making this longer to see what happens if it goes to next line!
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 8
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 9
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkText"> Question number 10: Making this longer to see the scroll attribute in action!
  <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>

      </ul>
    </div>
  )
}
export default Questionnaire;