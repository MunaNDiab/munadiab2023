const drinks = ['lemonade', 'soda', 'tea', 'water'];
const foods = ['beans', 'chicken', 'rice'];

drinks.forEach((drink) => {
    console.log(drink);
});

foods.forEach((food) => {
    console.log(food);
});

function getAge() {
    const birthDate = new Date(1985, 1, 16);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // Calculate age in years
    console.log(ageInYears);
    return ageInYears;
}

function convertNumberToWord(value) {
    const words = ["zero", "one", "two", "three", "four", "five"];
    const word = words[value];
    console.log(word);
    return word;
}

getAge();
convertNumberToWord(2);