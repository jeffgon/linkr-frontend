import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { deletePost } from "../../service/Service";
import { useState } from "react";

export default function PostDeleteModal(props) {
  const { handleToggleDel, postId, isRepost } = props;
  const [loading, setLoading] = useState(false);
  const { user, refresh, setRefresh } = useAuth();
  const { token } = user;

  function delPost() {
    setLoading(true);
    if (!isRepost) {
      console.log(postId)
      deletePost(`post/${postId}`, token)
        .then((res) => {
          handleToggleDel();
          setLoading(false);
          setRefresh(!refresh);
        })
        .catch((err) => {
          console.log(err.response.data)
          handleToggleDel();
          setLoading(false);
          alert("Could not delete post");
        });
    }
    if (isRepost) {
      deletePost(`repost/${postId}`, token)
      .then((res) => {
        handleToggleDel();
        setLoading(false);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err.response.data)
        handleToggleDel();
        setLoading(false);
        alert("Could not delete re-post");
      });
    }
  }

  return (
    <ContainerBackground onClick={() => handleToggleDel()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Are you sure you want delete this {isRepost ? 're-post' : 'post'}?</h1>
        <div>
        <Button
          color="#1877F2"
          background="#ffffff"
          onClick={() => handleToggleDel()}
        >
          No, go back
        </Button>
        <Button
          color="#ffffff"
          background="#1877F2"
          onClick={() => delPost()}
          disabled={loading ? true : false}
        >
          {loading ? "Deleting..." : "Yes, delete it"}
        </Button>
        </div>
      </Container>
    </ContainerBackground>
  );
}

const ContainerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff90;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  height: 200px;
  background-color: #333333;
  border-radius: 20px;
  padding: 30px 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: 700;
  text-align: center;
  h1 {
    width: 90%;
    color: #fff;
    font-size: 23px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border: none;
  border-radius: 5px;
  width: 134px;
  height: 37px;
  font-size: 16px;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;
