import React, { Component } from 'react'

import Question from '../Question/Question'

class QuestionListComponent extends Component {

  render() {
    const { questions } = this.props
    return (
      <div>
        {questions.edges.map(({ node }) => (
          <Question key={node.__id} question={node} />
        ))}
      </div>
    )
  }

}

export default QuestionListComponent;
