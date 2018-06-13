(function(){
interface IAdmin {
    role: string;
    name: string;
}

interface IUser{
    name: string;
    designation: string;
}

function getUser(usr: IAdmin | IUser){
    const newUser : IUser = usr as IUser; // type conversion when you are sure of the type.
}
})()