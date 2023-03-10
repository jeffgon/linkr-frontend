import styled from "styled-components";
import ReactHashtag from "react-hashtag";

export default function PostDescription(props) {
  const { text } = props;
  return (
    <Container>
      <ReactHashtag
        renderHashtag={(hashtagValue) => (
          <StyledHashtag 
            href={`../hashtags/${hashtagValue.split("#")[1]}`}>
              {hashtagValue}
          </StyledHashtag>
        )}
      >
        {text}
      </ReactHashtag>
    </Container>
  );
}

const Container = styled.h2`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  font-size: 17px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: #b7b7b7;
`;

const StyledHashtag = styled.a`
  font-weight: 700;
  color: #b7b7b7;
`;
