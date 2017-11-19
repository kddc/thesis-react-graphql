/**
 * @flow
 * @relayHash b8318ce6197fb90008b5c10081a56838
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type QuestionListPageQueryResponse = {|
  +allQuestions: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{| |};
    |}>;
  |};
|};
*/


/*
query QuestionListPageQuery {
  allQuestions(sortBy: {upvotes: DESC}) {
    edges {
      node {
        ...Question_question
        id
      }
    }
  }
}

fragment Question_question on Question {
  id
  text
  upvotes
  author {
    username
    id
  }
  answers(first: 1) {
    total
    edges {
      node {
        ...Answer_answer
        id
      }
    }
  }
}

fragment Answer_answer on Answer {
  id
  text
  author {
    username
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "sortBy",
            "value": {
              "upvotes": "DESC"
            },
            "type": "QuestionSortBy"
          }
        ],
        "concreteType": "QuestionConnection",
        "name": "allQuestions",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "QuestionEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Question",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "Question_question",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allQuestions{\"sortBy\":{\"upvotes\":\"DESC\"}}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "QuestionListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "QuestionListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "sortBy",
            "value": {
              "upvotes": "DESC"
            },
            "type": "QuestionSortBy"
          }
        ],
        "concreteType": "QuestionConnection",
        "name": "allQuestions",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "QuestionEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Question",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "upvotes",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "username",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 1,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "AnswerConnection",
                    "name": "answers",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "total",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "AnswerEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Answer",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "text",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "User",
                                "name": "author",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "username",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "id",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "answers{\"first\":1}"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allQuestions{\"sortBy\":{\"upvotes\":\"DESC\"}}"
      }
    ]
  },
  "text": "query QuestionListPageQuery {\n  allQuestions(sortBy: {upvotes: DESC}) {\n    edges {\n      node {\n        ...Question_question\n        id\n      }\n    }\n  }\n}\n\nfragment Question_question on Question {\n  id\n  text\n  upvotes\n  author {\n    username\n    id\n  }\n  answers(first: 1) {\n    total\n    edges {\n      node {\n        ...Answer_answer\n        id\n      }\n    }\n  }\n}\n\nfragment Answer_answer on Answer {\n  id\n  text\n  author {\n    username\n    id\n  }\n}\n"
};

module.exports = batch;
