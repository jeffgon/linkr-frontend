import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";

export default function CommentCard(props) {
  const { handleToggleComment, postComments, id} = props;

  return (
    <CommentsContainer>
      <a onClick={handleToggleComment}>
        <FaRegCommentDots
          size={"20px"}
          color={"#fff"}
        />
      </a>
      <p id={`my-anchor-element ${id}`} data-tooltip-place="top">
        {postComments}  comments
      </p>

    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 3px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    width: 100%;
  }
  a:hover {
    cursor: pointer;
  }
`
