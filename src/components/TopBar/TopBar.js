import UserImage from "../elements/UserImage";
import { SlArrowDown } from 'react-icons/sl'
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { Header, Layoff, LogoutButton } from "./style";
import { useAuth } from "../../context/Context";
import { getPersistLogin } from "../../service/Service";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function TopBar() {

  const [select, setSelect] = useState(false)
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {

    if (localStorage.token && user.user === '') {
      
      getPersistLogin('persist-login', localStorage.token).then(e => {

        setUser(e.data)
      }).catch(e=>console.log(e.response.data))
    }
    // eslint-disable-next-line
  }, [])

  function logout() {

    const confirm = window.confirm('Deseja sair?')

    if (confirm) {
      setUser({})
      localStorage.clear()
      navigate('/')
    }
  }

  return (
    <Header select={select}>

      <article>
        <h1 onClick={() => navigate('/timeline')}>linkr</h1>

        <SearchBar screen={'>800'} />

        <div onClick={() => setSelect(!select)}>

          <section>

            <IconContext.Provider value={{ size: '25px', cursor: 'pointer' }}>
              <h2> <SlArrowDown />  </h2>
            </IconContext.Provider>

          </section>

          <UserImage imageUrl={user.imageUrl} />

        </div>
      </article>

      <LogoutButton onClick={() => logout()} select={select} >Logout</LogoutButton>

      <Layoff select={select} onClick={() => setSelect(!select)} />

    </Header>
  );
}

