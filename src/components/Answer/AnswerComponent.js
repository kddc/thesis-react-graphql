import React, { Component } from 'react'
import '../../styles/Question.css'

class AnswerComponent extends Component {
  render() {
    // <Link to={`/question/${question.id}`}>{question.text}</Link>
    const { answer } = this.props
    return (
      <div className="question answer">
        <div className="content">
          {answer.text}
          <div className="info">
            Author: {(answer.author && answer.author.username) || 'Anonymous'}
          </div>
        </div>

      </div>
    );
  }

}

export default AnswerComponent;
