
import './App.css';
import Instructions from './components/Instructions'
import Comments from './components/Comments'
import {useState, useEffect } from 'react'

const App = () => {

  const [comments, setComments] = useState([])

  useEffect(() => {
      const apiCall = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments')
          const data = await response.json()
          setComments(data)
          
      }
      apiCall()
      
  }, )
// console.log(comments)
  return (
    <div className="container">
      <Instructions />
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
