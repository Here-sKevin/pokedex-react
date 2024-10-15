export type UserType = {
    username: string,
    password: string,
    name: string,
    lastname: string
   
}

type UserDetails = {
    name: string,
    lastname: string
   
}

export class UserDto {
    public username: string;
    public password: string;
    public details: UserDetails;

    constructor(user: UserType) {
        this.username = user.username
        this.password = user.password
        this.details = {
            name: user.name,
            lastname: user.lastname
        }
       
    }
}