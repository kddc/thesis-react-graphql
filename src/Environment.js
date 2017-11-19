const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  // return fetch('http://localhost:8000/graphql', {
  return fetch(`https://proud-filet-mignon-324.app.baqend.com/v1/code/graphql?query=${operation.text}`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  }).then(response => {
    return response.json()
  })
})

// const network = Network.create((operation, variables) => {
//   // return fetch('https://proud-filet-mignon-324.app.baqend.com/v1/code/graphql', {
//   return fetch('http://localhost:8000/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   }).then(response => {
//     return response.json()
//   })
// })

const environment = new Environment({
  network,
  store,
})

export default environment
