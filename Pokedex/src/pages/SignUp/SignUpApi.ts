import { UserDto, UserType } from "./interface/UserDto";

export function SaveUser(user: UserType) {
    const u = new UserDto(user);
    if(JSON.parse(localStorage.getItem("usersDB")) === null 
    || JSON.parse(localStorage.getItem("usersDB"))?.length === 0) 
    {
        const arrayUsers = []
        arrayUsers.push(u);
        localStorage.setItem("usersDB", JSON.stringify(arrayUsers));
    }
    else {
        const arrayUsers = JSON.parse(localStorage.getItem("usersDB"));
        arrayUsers.push(u)
        localStorage.setItem("usersDB", JSON.stringify(arrayUsers));
    }
    return true;
}