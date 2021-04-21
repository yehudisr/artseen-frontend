import { useEffect, useState } from 'react'

function Comment({ comment }){
 
    return(
        <div>
            <h6>{comment.user.firstname} {comment.user.lastname}</h6> 
            <p>{comment.content}</p>
            <hr/>
        </div> 
       
    )
}

export default Comment;