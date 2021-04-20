import Comment from './Comment'
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `

function Comments({comments, eventId}){

    const [commentsArray, setCommentsArray] = useState(comments)
    const initialState = ""
    const [formData, setFormData] = useState(initialState)
    const displayComments = commentsArray.map(comment => <Comment key={comment.id} comment={comment} />
    )

    function handleChange(e){
        setFormData(formData => e.target.value)
    }

    function handleClick(){
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                event_id: eventId,
                user_id: 1,
                content: formData
            })
        })
        .then(res => res.json())
        .then(addComment)
        setFormData(initialState)
    }

    function addComment(comment){
        const addComment = [...commentsArray, comment]
        setCommentsArray(addComment)
    }

    return(
        <Div>
        <ul>
        {displayComments}
        </ul>
        <form>
            <input 
            type="text"
            value={formData} 
            onChange={handleChange} />
            <input type="button" value="post" onClick={handleClick}/>
        </form>
        </Div>
       
    )
}

export default Comments;