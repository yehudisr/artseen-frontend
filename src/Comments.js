import Comment from './Comment'

function Comments({comments}){
    const displayComments = comments.map(comment => <Comment key={comment.id} comment={comment} />
    )

    return(
        <ul>
            {displayComments}
        </ul>
    )
}

export default Comments;