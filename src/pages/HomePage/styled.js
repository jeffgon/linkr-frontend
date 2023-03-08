import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 72px;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin-left: 10px;
        font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    }
    div {
        .icon-white {
            color: white;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
        img {
            width: 53px;
            height: 53px;
            border-radius: 26.5px;
        }
    }
`

export const Home = styled.div`
    width: 100%;
    height: 100%;
    background-color: #333333;
    display: flex;
    justify-content: center;
`

export const Timeline = styled.div`
    width: 611px;
    height: 100vh;
    section {
        margin-top: 78px;
        margin-bottom: 43px;
        p {
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 43px;
            line-height: 64px;
            color: #FFFFFF;
        }
    }
`

export const ContainerToPost = styled.div`
    width: 100%;
    height: 209px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-bottom: 29px;
    display: flex;
    div {
        width: 68px;
        img {
            width: 50px;
            height: 50px;
            margin-top: 18px;
            border-radius: 26.5px;
            margin-left: 18px;
        }
    }
    main {
        width: 100%;
        h1 {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            color: #707070;
            margin-left: 20px;
            margin-top: 15px;
        }
        button {
            width: 112px;
            height: 31px;
            margin-left: 412px;
            background-color: #1877F2;
            border-radius: 5px;
            color: white;
            border-style: none;
        }
    }
`

export const SiteLink = styled.input`
    width: 503px;
    height: 40px;
    background-color: #EFEFEF;
    border-radius: 5px;
    margin-left: 20px;
    border-style: none;
    font-size: 18px;
    font-family: 'Lato';
    ::placeholder {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
        text-align: left;
        line-height: 40px; 
        padding: 10px 0;
    }
`

export const DescriptionPost = styled.input`
    width: 503px;
    height: 66px;
    background-color: #EFEFEF;
    border-radius: 5px;
    margin-left: 20px;
    border-style: none;
    font-size: 12px;
    font-family: 'Lato';
    ::placeholder {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
        text-align: left;
        line-height: 40px; 
        padding: 10px 0;
}
`

export const ContainerPost = styled.div`
    width: 100%;
    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    margin-bottom: 16px;
    display: flex;
    div {
        width: 68px;
        img {
            width: 50px;
            height: 50px;
            margin-top: 18px;
            border-radius: 26.5px;
            margin-left: 18px;
    }
`

export const InfoPost = styled.main`
    width: 100%;
    height: 100%;
    h1 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #FFFFFF;
        margin-left: 18px;
        margin-top: 19px;
    }
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
        margin-left: 18px;
        margin-top: 7px;
    }
    div {
        width: 503px;
        height: 155px;
        left: 502px;
        top: 596px;
        border: 1px solid #4D4D4D;
        border-radius: 11px;
        margin-left: 18px;
        margin-top: 7px;
    }
`

export const Trendings = styled.div`
    width: 301px;
    height: 406px;
    background-color: #171717;
    border-radius: 16px;
    margin-top: 180px;
    margin-left: 30px;
`
