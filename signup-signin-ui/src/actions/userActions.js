import { FETCH_USERS, NEW_USER } from './types'

export const fetchUsers = () => dispatch => {
    //console.log('fetching...')
    fetch("http://localhost:3000/users").then((response) => {
        console.log(response)
        response.json().then(result => dispatch({
            type: FETCH_USERS,
            payload: result
        }))
    })
}

export const createUsers = userdata => dispatch => {
    fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: NEW_USER,
        payload: user
      })
    );
}