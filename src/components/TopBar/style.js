import styled from "styled-components";

export const Header = styled.header`

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  
  article{
    position: absolute;
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #151515;
    padding: 0 30px;
    z-index: 4;
    

    h1{
    font-family: "Passion One", cursive;
    cursor: pointer;
    font-size: 49px;
    color: #ffffff;
    }
    div{
      display: flex;
      align-items: center;
      gap: 30px;
      cursor: pointer;
      
      h2{
        color: white;
        transition: .5s;
        transform: ${props => props.select ? 'rotate(180deg)' : 'rotate(360deg)'};
      }
    }
  }
`;

export const SearchBarTop = styled.form`


  display: ${props => (props.screen ==='>800')?'flex':'none'};
  flex-direction: column;
 
  footer{
    width: 500px;
    height: 45px;
    input{
      width: 90%;
      height: 45px;
      border: none;
      font-size: 19px;
      border-radius: 10px 0 0 10px;
      padding-left: 15px;
    }
    input:focus{
      outline: none;
    }
    button{
      width: 10%;
      height: 45px;
      border: none;
      background-color: white;
      cursor: pointer;
      font-size: 20px;
      border-radius: 0 10px 10px 0;

    }
    button:hover{
      color: blue;
    }
  }

  ul{
    position: absolute;
    width: 480px;
    margin: 45px 0 0 10px;
  }
  

  @media (max-width: 800px){
    display: ${props => (props.screen ==='>800')?'none':'flex'};
    
    footer{
      width: 90vw;
      height: 45px;
      margin: 30px auto;
      display: flex;
      align-items: center;
    }
    ul{
      
      width: 88vw;
      margin: 76px auto 0 auto;
      left: 0;
      right: 0;
    }

  }

`;

export const Layoff = styled.div`

  display: ${props => props.select ? 'initial': 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const LogoutButton = styled.button`

  position: absolute;
  top: ${props => props.select ? '72px' : '22px'};
  right: 0;
  width: 150px;
  height: 50px;
  border-radius: 0 0 0 20px;
  border: none;
  background-color:  #151515;
  color: white;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  transition: .5s;
  z-index: 3;
  
  cursor: pointer;

  &&:hover{
    text-decoration-line: underline;
  }
`;

export const UserOptionCss = styled.li`

  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  width: 100%;
  height: 60px;
  background-color: #e7e7e7;
  cursor: pointer;
  p{
    font-weight: 400;
    font-size: 19px;
    color: #515151;
  }
  img{
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
  span{
    font-weight: 400;
    font-size: 19px;
    color: #C5C5C5;
  }
  &&:hover{
    p{
      text-decoration-line: underline;
    }
  }
`;
