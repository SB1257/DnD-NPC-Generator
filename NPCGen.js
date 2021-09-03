let traitGen = Math.floor((Math.random())*8)
let speciesGen = Math.floor((Math.random())*10)
let levelGen = Math.floor((Math.random())*15)
let classGen = Math.floor((Math.random())*11)

function NPC(){
    let trait = ''
    let species = ''
    let classs = ''
    let level = levelGen

if (traitGen === 0) {
    trait = 'An elderly '
} else if (traitGen === 1){
    trait = 'A loud '
} else if (traitGen === 2){
    trait = 'A quiet '
} else if (traitGen === 3){
    trait = 'A drunken '
} else if (traitGen === 4){
    trait = 'A lazy '
} else if (traitGen === 5){
    trait = 'A curious '
} else if (traitGen === 6){
    trait = 'A foreign '
} else if (traitGen === 7){
    trait = 'A nature-loving '
} else if (traitGen === 8){
    trait = 'A hostile '
};

if (speciesGen === 0) {
    species = ' human '
} else if (speciesGen === 1) {
    species = ' elf '
} else if (speciesGen === 2) {
    species = ' orc '
} else if (speciesGen === 3) {
    species = ' drow '
} else if (speciesGen === 4) {
    species = ' aasimar '
} else if (speciesGen === 5) {
    species = ' tiefling '
} else if (speciesGen === 6) {
    species = ' genasi '
} else if (speciesGen === 7) {
    species = ' halfling '
} else if (speciesGen === 8) {
    species = ' firbolg '
} else if (speciesGen === 9) {
    species = ' goblin '
} else if (speciesGen ===10) {
    species = ' goliath '
};

if (classGen === 0) {
    classs = 'fighter'
} else if (classGen === 1){
    classs = 'cleric'
} else if (classGen === 2){
    classs = 'druid'
} else if (classGen === 3){
    classs = 'bard'
} else if (classGen === 4){
    classs = 'barbarian'
} else if (classGen === 5){
    classs = 'rogue'
} else if (classGen === 6){
    classs = 'monk'
} else if (classGen === 7){
    classs = 'ranger'
} else if (classGen === 8){
    classs = 'paladin'
} else if (classGen === 9){
    classs = 'sorcerer'
} else if (classGen === 10){
    classs = 'warlock'
} else if (classGen === 11){
    classs = 'wizard'
}

return `${trait}level ${level}${species}${classs}`
}

console.log(NPC())