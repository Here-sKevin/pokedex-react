import { useUser } from "../../shared/context/UserContext";

type UserType = {
    username: string,
    password: string
}

export function getUser(user: UserType) {

    if(JSON.parse(localStorage.getItem("usersDB")) !== null 
    || JSON.parse(localStorage.getItem("usersDB"))?.length !== 0) 
    {
        const data = JSON.parse(localStorage.getItem("usersDB"));
        const val = data.map((item:UserType) => {
            if(item.username === user.username && item.password === user.password)
                return true
        })
        if(val[0] === undefined)
            return false
        else
            return true
    }
    return false
}