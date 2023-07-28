function FoodsAndDrinks() {
    const drinks = ['lemonade', 'soda', 'tea', 'water'];
    const foods = ['beans', 'chicken', 'rice'];

    console.log(drinks[0]);
    console.log(drinks[1]);
    console.log(drinks[2]);
    console.log(drinks[3]);

    console.log(foods[0]);
    console.log(foods[1]);
    console.log(foods[2]);

    return (
        <div>
            <h1>Drinks</h1>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>

            <h1>Foods</h1>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
        </div>
    );
}

export default FoodsAndDrinks;
