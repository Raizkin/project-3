const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const findBtn = document.querySelectorAll(".exercises__button")

const listRef = document.querySelector(".exercises__list")
console.log(listRef);


const createMarkUpItem = arr => {
    listRef.innerHTML = arr.map(({name, surname, born, dead}) => `<li class="exercises__item">
  <h2 class="exercises__name">${name}</h2>
  <h3 class="exercises__surname">${surname}</h3>
  <p class="exercises__born">${born}</p>
  <p class="exercises__dead">${dead}</p>
</li>`).join('')
}

findBtn.forEach((findBtn) => {
    findBtn.addEventListener("click", (event) => {
        const action = event.currentTarget.dataset.action;
        switch (action) {
            case "born-19-stolittya":
                const nineteenStolittya = scientists.filter((s) => s.born >= 1800 && s.born < 1900);
                createMarkUpItem(nineteenStolittya);
                break;
            case "albert-born-year":
                const bornAlbert = scientists.find((s) => s.name === "Albert");
                alert(`Albert Einstein народився у ${bornAlbert.born} році`); 
                break;
            case "alphabet":
                const alphabetSort = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
                createMarkUpItem(alphabetSort);
                break;
            case "surname-first-c":
                const findCSurname = scientists.filter((s) => s.surname.startsWith("C"));
                createMarkUpItem(findCSurname);
                break;
            case "years-lived":
                const ageSort = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                createMarkUpItem(ageSort);
                break;
            case "a-leter-surname":
                const findLetterA = scientists.filter((s) => !s.name.startsWith("A"));
                createMarkUpItem(findLetterA);
                break;
            case "dead-last":
                const findLatestBorn = [...scientists].sort((a, b) => b.born - a.born);
                alert(`${findLatestBorn[0].name} ${findLatestBorn[0].surname} народився найпізніше(у ${findLatestBorn[0].born} році)`);
                break;
            case "stary-molodyi":
                const findStaryMolodyi = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                alert(`${find[0].name} ${findStaryMolodyi[0].surname} прожив найдовше і прожив найменше(${findStaryMolodyi[0].dead - findStaryMolodyi[0].born} років), а ${findStaryMolodyi[findStaryMolodyi.length - 1].name} ${findStaryMolodyi[findStaryMolodyi.length - 1].surname} прожив найменше(${findStaryMolodyi[findStaryMolodyi.length - 1].dead - findStaryMolodyi[findStaryMolodyi.length - 1].born} років)`);
                break;
            case "surname":
                const findSurname = scientists.filter((s) => s.name[0] === s.surname[0]);
                createMarkUpItem(findSurname);
                break;
        };        
    });
});

createMarkUpItem(scientists)