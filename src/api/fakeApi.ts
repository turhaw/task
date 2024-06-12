const rows = [
    { id: 1, name: 'Liz Lemon', age: 36, Actions: true},
    { id: 2, name: 'Jack Donaghy', age: 40, Actions: true},
    { id: 3, name: 'Tracy Morgan', age: 39, Actions: false},
    { id: 4, name: 'Jenna Maroney', age: 40, Actions: false},
    { id: 5, name: 'Kenneth Parcell', age: Infinity, Actions: false,},
    { id: 6, name: 'Pete Hornberger', age: 42, Actions: true},
    { id: 7, name: 'Frank Rossitano', age: 36, Actions: false},
    { id: 8, name: 'Liz Lemon', age: 36, Actions: true},
    { id: 9, name: 'Jack Donaghy', age: 40, Actions: true},
    { id: 10, name: 'Tracy Morgan', age: 39, Actions: false},
    { id: 11, name: 'Jenna Maroney', age: 40, Actions: false },
    { id: 12, name: 'Kenneth Parcell', age: Infinity, Actions: false},
    { id: 13, name: 'Pete Hornberger', age: 42, Actions: true,},
    { id: 14, name: 'Frank Rossitano', age: 36, Actions: false},
    { id: 15, name: '%Liz Lemon', age: 36, Actions: true},
    { id: 16, name: 'Jack Donaghy', age: 40, Actions: true},
    { id: 17, name: 'Tracy Morgan', age: 39, Actions: false},
    { id: 18, name: 'Jenna Maroney', age: 40, Actions: false},
    { id: 19, name: 'Kenneth Parcell', age: Infinity, Actions: false},
    { id: 20, name: 'Pete Hornberger', age: 42, Actions: true},
    { id: 21, name: 'Frank Rossitano', age: 36, Actions: false},
    { id: 22, name: 'Liz Lemon', age: 36, Actions: true},
    { id: 23, name: 'Jack Donaghy', age: 40, Actions: true},
    { id: 24, name: 'Tracy Morgan', age: 39, Actions: false},
    { id: 25, name: 'Jenna Maroney', age: 40, Actions: false},
    { id: 26, name: 'Kenneth Parcell', age: Infinity, Actions: false},
    { id: 27, name: 'Pete Hornberger', age: 42, Actions: true},
    { id: 28, name: 'Frank Rossitano', age: 36, Actions: false},
    { id: 29, name: 'Liz Lemon', age: 32, Actions: true},
    { id: 30, name: 'Liz Lemon', age: 33, Actions: true},
    { id: 31, name: 'Liz Lemon', age: 88, Actions: true},
  ]


export const getData = new Promise((resolve, reject) => {
    if (rows) {
        resolve(rows);
    }
    reject(new Error('Filed to load'));
});
export const getUser = new Promise((resolve, reject)=> {
    
})
export const getUserByID = (id: string) => {
      const user = rows.find((item) => {
        let a = item.id.toString()
         return id === a
      })
      return user;
}


export const getPosts = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .catch((e) => e)
}


export const createPosts = async (data: any) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: data.title,
      body: data.body,
      userId: data.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(() => getPosts())
}

export const addUser = ({newName, newEmail, newWebsite}: any) => {
  const name = newName.trim()
  const email = newEmail.trim()
  const website = newWebsite.trim()
  if (name && email && website) {
   return  fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(data =>  data)
  }
}


export const deleteUser = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
}
