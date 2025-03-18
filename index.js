const cats = ["Milo", "Otis", "Garfield"];
const newCats = ["Broom"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function destructivelyRemoveLastCat(){
    cats.pop();

}
function removeLastCat(){
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1);
}


