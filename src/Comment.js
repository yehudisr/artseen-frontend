import { useEffect, useState } from 'react'


// const Author = styled.h6`
// font-size: 1.5em;
// color: blue;
// `;

function Comment({ comment }){
    console.log(comment)
    return(
        <div>
            <h6 textTransform="uppercase">{comment.username}</h6> 
            <p>{comment.content}</p>
            <hr/>
        </div> 
       
    )
}

export default Comment;