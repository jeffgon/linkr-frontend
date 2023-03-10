import styled from "styled-components"
import UserImage from "../elements/UserImage"

export default function Comment(props) {
    const {imageUrl, userName, commentText, postOwnerName} =  props
    return (
        <CommentContainer> 
            <UserImage imageUrl={imageUrl} />
            <CommentContent>
                <h2>{userName}</h2>
                <h3>{commentText}</h3>
            </CommentContent>
            {postOwnerName === userName && (
                <h4>• post's author</h4>
            )}
        </CommentContainer>
    )
};

const CommentContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 600px;
    height: 70px;
    h4 {
        position: absolute;
        left: 135px;
        top: 18px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #565656;
    }
`

const CommentContent = styled.div`
    position: absolute;
    left: 80px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    h2 {
        color: #F3F3F3;
    }
    h3 {
        color: #ACACAC;
    }
`



