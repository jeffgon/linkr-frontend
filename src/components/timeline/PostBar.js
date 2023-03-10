import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/Context.js";
import { postPost } from "../../service/Service.js";
import UserImage from "../elements/UserImage";

export default function PostBar({ reload, setReload }) {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, refresh, setRefresh } = useAuth();
  const { token } = user;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!link) alert("Preencha o link!");

    const submitObject = { link, text };

    postPost("post", submitObject, token)
      .then((res) => {
        setLoading(false);
        setLink("");
        setText("");
        setReload(!reload);
        alert("Link published successfully!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setLink("");
        setText("");
        alert("Something went wrong, please try again");
      });
  }

  return (
    <Container>
      <ImageContainer>
        <UserImage imageUrl={user.imageUrl} />
      </ImageContainer>
      <PostContainer>
        <Header>What are you going to share today?</Header>
        <form onSubmit={handleSubmit}>
          <LinkInput
            value={link}
            type="url"
            placeholder="http://..."
            required
            onChange={(e) => setLink(e.target.value)}
          />
          <DescriptionInput
            value={text}
            type="text"
            placeholder="Tell your followers more about your link!"
            onChange={(e) => setText(e.target.value)}
          />
          <PublishButton type="submit" disabled={loading ? true : false}>
            {loading ? "Publishing..." : "Publish"}
          </PublishButton>
        </form>
      </PostContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 611px;
  height: 209px;
  padding: 16px 22px 16px 18px;
  display: flex;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #ffffff;
  color: #707070;
  font-family: Lato, sans-serif;
`;

const ImageContainer = styled.div`
  margin-right: 18px;
`;

const PostContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;

  input,
  button {
    font-family: Lato, sans-serif;
  }
`;

const Header = styled.h1`
  height: 35px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
`;

const LinkInput = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  background-color: #efefef;
  padding: 0 13px;
  font-size: 15px;
  font-weight: 300;
  color: black;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #949494;
  }
`;

const DescriptionInput = styled.input`
  width: 100%;
  height: 66px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  background-color: #efefef;
  padding: 0 13px;
  font-size: 15px;
  font-weight: 300;
  color: black;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #949494;
  }
`;

const PublishButton = styled.button`
  width: 112px;
  height: 31px;
  margin-top: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 0;
  border-radius: 5px;
  background-color: #1877f2;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
