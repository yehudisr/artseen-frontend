import styled from 'styled-components'

const Div = styled.div`
    // background: blue;
    border: 2px solid;
    height: 150px;
    width: 450px;
    padding: 60px;
    margin-top: 125px;
    margin-left: 300px;

`
const P = styled.p`
    font-weight: bold;
    font-size: 18px;
`

function NoDescriptionAvailable(){

    return(
        <Div>
            <P>NO DESCRIPTION AVAILABLE</P>
        </Div>
    )
}

export default NoDescriptionAvailable;
