let a = prompt("Salem")
let b = prompt("Ok batyrmasyn basynyz")
let c =prompt("Ctrl + Shirft + J  basynyz")

let menu = {
    name:"Ronaldo",
    surname:"Cristiano",
    age:"39",
    gol:"915",
    comandolary: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al Nassr"]
};
function getFullName(menu) {
    return `${menu.name} ${menu.surname}`;
}
menu.gol = parseInt(menu.gol) + 2;
function getFullName(menu){
    return`${menu.name},${menu.surname}`;
}
function getCurrentClub(menu) {
    return menu.comandolary[menu.comandolary.length - 1];
}
console.log("Толык аты жони:",getFullName(menu));
console.log("Гол салгандары:",menu.gol);
console.log("Казирги ойнап жаткан клубы:",getCurrentClub(menu));