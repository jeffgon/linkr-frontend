import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import { useAuth } from "../../context/Context.js";
import { HeartFilled, HeartOutline } from "../../context/ReactIcons.js";
import { deletePost, getPersistLogin, postPost } from "../../service/Service";

export default function LikesCard({ id, likes, isRepost, originalPostId }) {
  const [postLikes, setPostLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("Liked by");
  const { user } = useAuth();
  const { token } = user;

  useEffect(() => {
    userLikesPost((isRepost ? originalPostId : id), token);
    getPostLikes((isRepost ? originalPostId : id), token);
  }, []);

  function userLikesPost(postId, token) {
    getPersistLogin(`like/${postId}`, token)
      .then((ans) => {
        setIsLiked(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getPostLikes(postId, token) {
    getPersistLogin(`likes/${postId}`, token)
      .then((ans) => {
        setPostLikes(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick(id) {
    if (isLiking) return;
    setIsLiking(true);
    if (isLiked) {
      deletePost(`like/${id}`, token)
        .then((ans) => {
          userLikesPost(id, token);
          getPostLikes(id, token);
          setIsLiking(false);
        })
        .catch((err) => {
          alert("something went wrong!");
          console.log(err);
          setIsLiking(false);
        });
    } else {
      postPost(`like/${id}`, {}, token)
        .then((ans) => {
          userLikesPost(id, token);
          getPostLikes(id, token);
          setIsLiking(false);
        })
        .catch((err) => {
          alert("something went wrong!");
          console.log(err);
          setIsLiking(false);
        });
    }
  }

  return (
    <LikesContainer>
      <a onClick={() => isRepost ? handleClick(originalPostId) : handleClick(id)}>
        {isLiked ? <HeartFilled /> : <HeartOutline />}
      </a>
      <p id={`my-anchor-element ${id}`} data-tooltip-place="top">
        {postLikes} likes
      </p>
      <Tooltip
        anchorId={`my-anchor-element ${id}`}
        content={tooltipContent}
        place="bottom"
        style={{ color: "#fff" }}
      />
    </LikesContainer>
  );
}

const LikesContainer = styled.div`
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
`;
