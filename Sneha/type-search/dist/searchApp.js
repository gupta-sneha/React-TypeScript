(function () {
    var users = [
        {
            name: "Rajnikant",
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
    ];
    var SearchResult = /** @class */ (function () {
        function SearchResult(list) {
            this.list = list;
        }
        SearchResult.prototype.renderList = function () {
            var ulE1 = document.createElement('ul');
            var divE1 = document.querySelector('#result');
            this.list.forEach(function (element) {
                var liE1 = document.createElement("li");
                liE1.textContent = element.name;
                ulE1.appendChild(liE1);
            });
            divE1.innerHTML = '';
            divE1.appendChild(ulE1);
        };
        return SearchResult;
    }());
    new SearchResult(users).renderList();
    var myInput = document.querySelector('input');
    myInput.addEventListener('keyup', function (e) {
        // const inputVal : string | number= (e.target as HTMLInputElement).value;
        // let filteredList: Array<IUser>=[];
        // if(inputVal as string){
        //     filteredList= users.filter((item: IUser) => item.name.includes(inputVal));
        // } else {
        //     filteredList= users.filter((item: IUser) => (item.age as number) >inputVal);
        // }   
        var filteredList = users.
            filter(function (item) { return item.name.includes(e.target.value); });
        new SearchResult(filteredList).renderList();
    });
})();
