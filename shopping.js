const shoppingList = [
    {
        id: 1,
        name: "milk",
        isEdible: true
    },
    {
        id: 2,
        name: "cereal",
        isEdible: true
    },
    {
        id: 3,
        name: "bleach",
        isEdible: false
    },
]


let addToShoppingList = (name) => {
    let newItem = {};
    //Assigning id to new item
    const lastIndex = shoppingList.length - 1;
    const currentLastItem = shoppingList[lastIndex];
    const maxId = currentLastItem.id;
    const idForNewItem = maxId + 1;
    newItem.id = idForNewItem;
    newItem.name = name;
    newItem.isEdible = true;
    newItem.dateCreated = "7-16-2021"
    shoppingList.push(newItem)
}

addToShoppingList("grapes");
addToShoppingList("bread");

console.log(shoppingList);