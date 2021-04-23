import Comment from './Comment'
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup, Box, Container, Input, Flex, Spacer } from "@chakra-ui/react";


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
        <Container>
            <Box>
            {displayComments}
            </Box><Spacer/>
            <Box>
            <form>
                <Input
                type="text"
                value={formData} 
                onChange={handleChange} />
                <Button type="submit" value="post" onClick={handleClick}>Post</Button>
            </form>
            </Box>
        </Container>
       
    )
}

export default Comments;