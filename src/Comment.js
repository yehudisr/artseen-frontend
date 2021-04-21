import { useEffect, useState } from 'react'

function Comment({ comment }){
    console.log(comment)
    return(
        <div>
            <h6>{comment.username}</h6> 
            <p>{comment.content}</p>
            <hr/>
        </div> 
       
    )
}

export default Comment;