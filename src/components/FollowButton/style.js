import styled from "styled-components";


export const FollowButtonCss = styled.button`
    width: 110px;
    height: 30px;
    background-color: ${props => props.isFollowing ? '#ffffff': '#1877F2'};
    color: ${props => props.isFollowing ? '#1877F2': '#ffffff'};
    border: none;
    position: absolute;
    top: 120px;
    right: 15%;
    transition: 0.5s;
    cursor: pointer;

    @media (max-width: 800px){
        top: 220px;
        right: 70px;
    }
`;