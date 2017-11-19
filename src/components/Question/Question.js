import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

import QuestionComponent from './QuestionComponent'

class Question extends Component {
  render() {
    const { question } = this.props
    return (
      <QuestionComponent question={question} onUpvote={this.onUpvote} />
    )
  }
}

export default createFragmentContainer(Question, graphql`
  fragment Question_question on Question {
    id
    text
    upvotes
    author {
      username
    }
    answers(first: 1) {
      total
      edges {
        node {
          ...Answer_answer
        }
      }
    }
  }
`)
