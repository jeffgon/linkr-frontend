import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { RepostIcon } from "../../context/ReactIcons";

export default function RepostBox({name, userId}) {
    const [displayName, setDisplayName] = useState()
    const { user } = useAuth();
    
    useEffect(() => {
        if (user.userId === userId) {
            setDisplayName('you')
        }
        else {
            setDisplayName(name)
        }
    }, [])

    return (
        <RepostBoxContainer>
            <RepostIcon />
            <p>Re-posted by: <span>{displayName}</span></p>
        </RepostBoxContainer>
    )
};


const RepostBoxContainer = styled.div`
  width: 100%;
  background-color: #1E1E1E;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 12px;

  * {
    margin-left: 10px;
  }
  span {
    margin-left: 0;
    font-weight: 700;
  }
`;