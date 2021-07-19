const shoppingList = [
    {
        id: 1,
        name: "milk",
        isEdible: true,
        price: 2
    },
    {
        id: 2,
        name: "cereal",
        isEdible: true,
        price: 4
    },
    {
        id: 3,
        name: "bleach",
        isEdible: false,
        price: 9
    },
]


let addToShoppingList = (name) => {
    let newItem = {};
    //Assigning id to new item
    const lastIndex = shoppingList.length - 1;
    const currentLastItem = shoppingList[lastIndex];
    // const maxId = currentLastItem.id;
    const idForNewItem = currentLastItem.id + 1;
    newItem.id = idForNewItem;
    //
    newItem.name = name;
    newItem.isEdible = true;
    newItem.dateCreated = new Date();
    shoppingList.push(newItem)
}

addToShoppingList("grapes");
addToShoppingList("bread");


for (const item of shoppingList) {
    if (item.price < 8) {
        console.log(item)
    }
}


console.log(shoppingList);