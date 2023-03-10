import styled from "styled-components";

export default function UserImage(props) {
  const { imageUrl } = props;
  return <Container src={imageUrl} />;
}

const Container = styled.img`
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 30px;
  object-fit: cover;
`;
