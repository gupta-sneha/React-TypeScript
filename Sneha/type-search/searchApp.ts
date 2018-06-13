(function (){
    interface IUser{
        name: string;
        age: number;
    }

    const users: Array<IUser> = [
        {
            name : "Rajnikant",
            age: 10
        },
        {
            name: "Surya",
            age: 30
        },
        {
            name: "Vijay",
            age: 20
        }
    ]

    class SearchResult {
        constructor(public list : Array<IUser>){

        }        

        renderList(){
            const ulE1: HTMLUListElement = document.createElement('ul');
            const divE1: HTMLDivElement = document.querySelector('#result') as HTMLDivElement;           

            this.list.forEach((element: IUser) => {
                const liE1:HTMLLIElement = document.createElement("li");
                liE1.textContent = element.name;
                ulE1.appendChild(liE1)
            });

            divE1.innerHTML = '';
            divE1.appendChild(ulE1);
        }
    }

   new SearchResult(users).renderList();

    const myInput: HTMLInputElement = document.querySelector('input');

    myInput.addEventListener('keyup', (e: KeyboardEvent) => {

        // const inputVal : string | number= (e.target as HTMLInputElement).value;

        // let filteredList: Array<IUser>=[];

        // if(inputVal as string){
        //     filteredList= users.filter((item: IUser) => item.name.includes(inputVal));
        // } else {
        //     filteredList= users.filter((item: IUser) => (item.age as number) >inputVal);
        // }   

        const filteredList: Array<IUser>= users.
            filter((item: IUser) => item.name.includes((e.target as HTMLInputElement).value));     

        new SearchResult(filteredList).renderList();
    })

})()



