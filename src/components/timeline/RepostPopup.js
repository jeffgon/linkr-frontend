import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { postPost } from "../../service/Service";

export default function RepostPopup({
  handleToggleRepostPopup,
  id,
  userId,
  reload,
  setReload,
  isRepost,
  originalPostId
}) {
  const { user } = useAuth();
  const [isReposting, setIsReposting] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    setSuccess(false)
  }, [])

  function handleClick() {
    setIsReposting(true);
    if (user.userId === userId) return;
    let route = id
    if (isRepost) route = originalPostId;
    postPost(`repost/${route}`, {}, user.token)
      .then((ans) => {
        setIsReposting(false);
        setSuccess("Shared successfuly!");
        setReload(!reload);
        setTimeout(() => {
          handleToggleRepostPopup();
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data)
        setSuccess("User aleary reposted this!");
        setTimeout(() => {
          handleToggleRepostPopup();
        }, 2000);
      });
  }

  return (
    <PopupContainer onClick={handleToggleRepostPopup}>
      <Popup onClick={(e) => e.stopPropagation()}>
        {success ? (
          <p>{success}</p>
        ) : (
          <>
            <h1>Do you want to re-post this link?</h1>
            <div>
              <Button
                color="#1877F2"
                background="#ffffff"
                onClick={handleToggleRepostPopup}
              >
                No, cancel
              </Button>
              <Button
                color="#ffffff"
                background="#1877F2"
                onClick={handleClick}
              >
                {isReposting ? "Sharing..." : "Yes, share!"}
              </Button>
            </div>
          </>
        )}
      </Popup>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
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

const Popup = styled.div`
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
  p {
    width: 100%;
    font-size: 23px;
    color: #ffffff;
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
