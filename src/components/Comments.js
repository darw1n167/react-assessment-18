// import {useEffect, useState} from 'react'

const Comments = (props) => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.
        const handleClick = (e) => {
            console.log(e.target.id)
        }
 

    
        // Replace this with your code.
        return (
            
                props.comments.map((comment) => (
                    <h1 key={comment.id}id={comment.id} onClick={handleClick}>{comment.body}</h1>
                    
                ))
           
        )
        
}

export default Comments