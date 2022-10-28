import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )

  const [feed, setFeed] = useState<Object[]>([])
  const [userList, setUserList] = useState<Object[]>([])

  const getFeed = async () => {
    const allPosts = await fetch('http://localhost:3000/feed')
    .then(res => res.json())

    setFeed(allPosts);
  }

  const getUsers = async () => {
    const allUsers = await fetch('http://localhost:3000/users')
    .then(res => res.json())

    setUserList(allUsers)
  }

  return (
    <React.Fragment>
      {/* <form>
        <input type='text' /> <br /><br />
        <button type='submit'>submit post</button>
      </form>
      <br /> */}
      <h2>Feed</h2>
      {feed.map( f =>
      <div>
        <h3>{f.title}</h3>
        <h4>{f.author.name}</h4> 
        <p>{f.content}</p>
      </div>
      )}
      <button onClick={getFeed}>refresh posts</button>
      { userList.length > 0 ?
      <div>
        <h4>{userList[0].name}</h4>
      </div>
      : null }
    </React.Fragment>
  )
}

export default App
