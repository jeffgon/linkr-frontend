import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { RepostIcon } from "../../context/ReactIcons";

export default function RepostCard({id, handleToggleRepostPopup, reposts, userId}) {
    const { user } = useAuth();

    function handleClick(){
        handleToggleRepostPopup()
    }

    return (
        <RepostContainer>
            <button disabled={(userId === user.userId) ? true : false} onClick={handleClick}>
            <RepostIcon />
            </button>
            <p><span>{reposts}</span>{(Number(reposts) === 1) ? 're-post' : 're-posts'}</p>
        </RepostContainer>
    )
};

const RepostContainer = styled.div`
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
  button {
    background-color: transparent;
    border: none;
  }
  button:hover {
    cursor: pointer;
  }

  span {
    margin-right: 4px;
  }
`;