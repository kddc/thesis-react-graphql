import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'

import environment from '../../Environment'
import QuestionListComponent from './QuestionListComponent'

const QuestionListPageQuery = graphql`
  query QuestionListPageQuery {
    allQuestions(sortBy: {
      upvotes:DESC
    }) {
      edges {
        node {
          ...Question_question
        }
      }
    }
  }
`

class QuestionList extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={QuestionListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <QuestionListComponent questions={props && props.allQuestions} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}

export default QuestionList
