import styled from "styled-components";

export default function LinkCard(props) {
  const { link, title, description, image } = props;
  return (
    <LinkAnchor href={link} target="_blank">
      <Container>
        <LinkContent>
          <LinkTitle>{title}</LinkTitle>
          <LinkDescription>{description}</LinkDescription>
          <LinkUrl>{link}</LinkUrl>
        </LinkContent>
        <LinkImage alt={title} src={image} />
      </Container>
    </LinkAnchor>
  );
}

const LinkAnchor = styled.a``;

const Container = styled.div`
  width: 503px;
  height: 155px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  box-sizing: border-box;
  position: relative;
  background-color: inherit;
`;

const LinkContent = styled.div`
  /* height: 155px; */
  width: calc(100% - 155px);
  margin: 24px 19px;
`;

const LinkTitle = styled.h1`
  margin-bottom: 5px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const LinkDescription = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #9b9595;
`;

const LinkUrl = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #cecece;
  position: absolute;
  bottom: 24px;
  left: 19px;
`;

const LinkImage = styled.img`
  width: 155px;
  height: 153px;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  box-sizing: border-box;
  object-fit: cover;
`;
