import { useEffect, useState } from 'react'
import styled from "styled-components";
const Wrapper = styled.section`
padding: 1em;
background: #F8F8F8;
border-radius: 10px;
margin: 5px;
text-align: left;
`;
const Span = styled.span`
padding: 1em;
background: #F8F8F8;
`;
const Auth = styled.span`
font-size: .8em;
`;
function Comment({ comment }){
    return(
        <Wrapper>
            <Auth><b>{comment.username}:</b> {comment.content}</Auth> 
        </Wrapper> 
    )
}

export default Comment;