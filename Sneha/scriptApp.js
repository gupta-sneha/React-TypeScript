const myInput = document.querySelector('input');
const divE1 = document.querySelector('#result');

const actors = [
    {
        name : 'RajniKant'
    },
    {
        name : 'Vijay'
    },
    {
        name : 'Surya'
    }
]

myInput.addEventListener('keyup', (e) =>{
    divE1.innerHTML = '';

    var filteredList = actors.filter(item => item.name.includes(e.target.value));

    renderList(filteredList);
})

function renderList(list){
    const ulE1 = document.createElement("ul");

    list.forEach((item) =>{
        const liE1 = document.createElement("li");
        liE1.textContent = item.name;
        ulE1.appendChild(liE1)
    });

    divE1.appendChild(ulE1);
}