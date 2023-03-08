import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContainerSignUp, Button } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

/*const exBody = {
	email: "goku@email.com",
	password: "goku123",
    username: "Goku",
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdragonball.guru%2Fhow-old-is-goku%2F&psig=AOvVaw3G49AU5Oy7ZCtPzLGDXbfI&ust=1678323558005000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCODZoM2Qy_0CFQAAAAAdAAAAABAE"  
}
*/
// BASE_URL = http://localhost:5005
//
export default function SingUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState("");

  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();
    const url = `${BASE_URL}/signup`;
    const body = { email, password, username, picture };
    console.log(body);

    const promise = axios.post(url, body);
    promise.then((res) => {
      console.log(res);
      // alert("Cadastro Realizado");

      navigate("/");
    });
    promise.catch((err) => console.log(err.response.data));
  }
  return (
    <ContainerSignUp>
      <form onSubmit={createAccount}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="picture url"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          required
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </ContainerSignUp>
  );
}
