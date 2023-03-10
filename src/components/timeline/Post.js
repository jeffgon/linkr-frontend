import styled from "styled-components";
import UserImage from "../elements/UserImage";
import LinkCard from "./LinkCard";
import PostDeleteModal from "./PostDeleteModal";
import DelEditIcons from "./PostDelEditIcons";
import TextEditBox from "./TextEditBox";
import PostDescription from "./PostDescription";
import LikesCard from "./LikesCard";
import CommentCard from "./CommentCard";
import CommentBox from "./CommentBox";

import { useAuth } from "../../context/Context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepostCard from "./RepostCard";
import RepostBox from "./RepostBox";
import { getPersistLogin } from "../../service/Service";
import RepostPopup from "./RepostPopup";

export default function Post(props) {
  const {
    id,
    imageUrl,
    name,
    text,
    link,
    title,
    description,
    image,
    userId,
    likes,
    comments,
    isRepost,
    originalPostId,
    originalUserId,
    reposts,
  } = props.post;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTextEditBox, setOpenTextEditBox] = useState(false);
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const [openRepostPopup, setOpenRepostPopup] = useState(false);
  const [repostInfo, setRepostInfo] = useState(undefined);
  const { user } = useAuth();
  const { token } = user;
  const editObject = { link, text };
  const navigate = useNavigate();
  useEffect(() => {
    if (isRepost) {
      getRepostInfo();
    }
  }, [isRepost]);

  function verifyUserPost(userName, postOwnerName) {
    if (userName === postOwnerName) {
      return true;
    }
    return false;
  }
  const isUserPost = verifyUserPost(user.name, name);

  function getRepostInfo() {
    getPersistLogin(`user/${originalUserId}`, token)
      .then((ans) => {
        setRepostInfo(ans.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function handleToggleDel() {
    setOpenDeleteModal(!openDeleteModal);
  }
  function handleToggleEdit() {
    setOpenTextEditBox(!openTextEditBox);
  }
  function handleToggleComment() {
    setOpenCommentBox(!openCommentBox);
  }
  function handleToggleRepostPopup() {
    setOpenRepostPopup(!openRepostPopup);
  }
  function handleUserRedirect() {
    navigate(`/user/${userId}`);
  }

  return (
    <OutsideContainer>
      {isRepost && <RepostBox name={name} userId={userId} />}
      {openRepostPopup && (
        <RepostPopup
          handleToggleRepostPopup={handleToggleRepostPopup}
          id={id}
          userId={userId}
          reload={props.reload}
          setReload={props.setReload}
          isRepost={isRepost}
          originalPostId={originalPostId}
        />
      )}
      <Container key={id}>
        <ContentContainer openCommentBox={openCommentBox} key={id}>
          <ImageContainer>
            <UserImage imageUrl={isRepost ? repostInfo?.imageUrl : imageUrl} />
            <LikesCard
              id={id}
              likes={likes}
              isRepost={isRepost}
              originalPostId={originalPostId}
            />
            <CommentCard
              id={id}
              postComments={comments}
              handleToggleComment={handleToggleComment}
            />
            <RepostCard
              id={id}
              reposts={reposts}
              userId={userId}
              handleToggleRepostPopup={handleToggleRepostPopup}
            />
          </ImageContainer>

          <PostContainer>
            <UserName onClick={handleUserRedirect}>
              {isRepost ? repostInfo?.name : name}
            </UserName>

            {isUserPost && (
              <DelEditIcons
                postId={id}
                editObject={editObject}
                handleToggleEdit={handleToggleEdit}
                handleToggleDel={handleToggleDel}
                isRepost={isRepost}
              />
            )}

            {openDeleteModal && (
              <PostDeleteModal
                postId={id}
                isRepost={isRepost}
                handleToggleDel={handleToggleDel}
              />
            )}

            {openTextEditBox && (
              <TextEditBox
                postId={id}
                handleToggleEdit={handleToggleEdit}
                previousText={text}
              />
            )}

            {!openTextEditBox && <PostDescription text={text} />}

            <LinkCard
              link={link}
              title={title}
              description={description}
              image={image}
            />
          </PostContainer>
        </ContentContainer>

        {openCommentBox && isRepost === true && (
          <CommentContainer>
            <CommentBox id={originalPostId} postOwnerName={name} />
          </CommentContainer>
        )}

        {openCommentBox && isRepost === false && (
          <CommentContainer>
            <CommentBox id={id} postOwnerName={name} />
          </CommentContainer>
        )}
      </Container>
    </OutsideContainer>
  );
}

const OutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border-radius: 16px;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 16px;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 611px;
  max-width: 611px;
  min-width: 80%;
  /* height: 200px; */
  padding: 16px 21px 16px 18px;
  display: flex;
  box-sizing: border-box;
  background-color: #171717;
`;

const CommentContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  background-color: #1e1e1e;
  border-radius: 16px;
`;

const ImageContainer = styled.div`
  margin-right: 18px;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const UserName = styled.div`
  height: 30px;
  margin-top: 5px;
  font-size: 19px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`;
