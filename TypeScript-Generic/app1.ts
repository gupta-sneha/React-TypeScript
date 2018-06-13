interface IA {
    name: string;
}

interface IB extends IA {
    age: number;
}

const a1: IB = {
    name: 'ertre',
    age: 10
}


type UserType = {
    name: string,
    age?: number
}

const u: UserType = {
    name: 'ryrey',
    age: 10
}

type UserProfileType = {
    email: string
}

type CompositeUserType = UserType & UserProfileType;

const ut: CompositeUserType = {    
    name: 'fgh',
    email: 'ghhfg@gmail.com'
}



type ReadonlyCompositeUserType = Readonly<CompositeUserType>;

const rut: ReadonlyCompositeUserType = {    
    name: 'fgh',
    email: 'ghhfg@gmail.com'
}

//rut.age=10;

type PartialCompositeUserType = Partial<CompositeUserType>;

const put: PartialCompositeUserType = {    
    
}

