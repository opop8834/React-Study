import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "아무개",
        comment: "첫 댓글 입니다."
    },
    {
        name: "아무개2",
        comment: "두번째 댓글 입니다."
    },
    {
        name: "아무개3",
        comment: "세번째 댓글 입니다."
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((item) => {
                return(
                    <Comment name={item.name} comment={item.comment} />
                );
            })}
        </div>
    );
}

// function CommentList(props){
//     return(
//         <div>
//             <Comment name={"아무개"} comment={"첫 댓글 입니다."}/>
//             <Comment name={"아무개2"} comment={"두번째 댓글 입니다."}/>
//         </div>
//     );
// }

export default CommentList;