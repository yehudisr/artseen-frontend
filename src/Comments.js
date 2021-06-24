import Comment from './Comment'
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, WrapItem, Input, Form } from "@chakra-ui/react";

function Comments({comments, eventId, currentUser}){

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
                user_id: currentUser.id,
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
        <div>
        <ul>
        {displayComments}
        </ul>
        
            <Input
            multiline
            variant="filled"
            placeholder="comment..."
            size="sm"
            marginTop="2" 
            type="text"
            value={formData} 
            onChange={handleChange}
            w="290px"
            borderRadius = "8px"
            padding="20px"
             />
             <br/>
            <Button
            marginTop="2"
            variant="outline" 
            colorScheme="blue" value="post" 
            onClick={handleClick}>Post</Button>
        </div>
       
    )
}

export default Comments;