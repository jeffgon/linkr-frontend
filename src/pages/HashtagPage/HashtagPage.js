import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import Post from "../../components/timeline/Post"
import TopBar from "../../components/TopBar/TopBar.js";
import Trending from "../../components/timeline/Trending";
import { useAuth } from "../../context/Context.js";
import { getPersistLogin } from "../../service/Service";

export default function HashtagPage() {
  const [posts, setPosts] = useState([]);
  const { hashtag } = useParams();
  const { user, isLoading, setIsLoading } = useAuth();
  const { token } = user;

  useEffect(() => {
    setIsLoading(true);
    getPersistLogin(`posts/${hashtag}`, token)
      .then((ans) => {
        setIsLoading(false);
        setPosts(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <Container>
      <TopBar />
      <Main>
        <HeaderContainer>#{hashtag}</HeaderContainer>
        <TimelineContainer>
          {isLoading && (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
          {!isLoading && (
            <PostContainer>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </PostContainer>
          )}
        </TimelineContainer>
      </Main>
      <Trending />
      {/* Header */}
      {/* HashtagsContainer */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
  padding-top: 72px;
`;

const Main = styled.div`
  height: 100%;
  margin: 53px 241px 29px;
`;

const HeaderContainer = styled.h1`
  margin-bottom: 43px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 43px;
  color: #ffffff;
`;

const TimelineContainer = styled.div``;

const PostContainer = styled.div`
  margin-top: 29px;
`;
