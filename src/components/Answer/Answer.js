import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

import AnswerComponent from './AnswerComponent'

class Answer extends Component {
  render() {
    const { answer } = this.props
    return (
      <AnswerComponent answer={answer} />
    )
  }
}

export default createFragmentContainer(Answer, graphql`
  fragment Answer_answer on Answer {
    id
    text
    author {
      username
    }
  }
`)
