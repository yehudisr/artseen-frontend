import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `

function Comment({ comment }){

    return(
        
        <Div>
            <h6> Insert Name of User </h6>
            <p>{comment.content}</p>
        </Div> 
       
    )
}

export default Comment;