import { useNavigate } from "react-router";
import { UserOptionCss } from "./style";


export default function UserOption({data, setUsersGot, setSearch}){
    
    const {id, imageUrl, name ,followerId} = data
    const navigate = useNavigate()

    function handleClick(){
        setUsersGot([])
        navigate(`/user/${id}`)
        setSearch('')
    }
    
    return(
        <UserOptionCss onClick={handleClick}>
            <img src={imageUrl} alt={imageUrl} />
            <p>{name}</p>
            {(followerId !== null)? <span>•following</span>:''}
        </UserOptionCss>
    );
}