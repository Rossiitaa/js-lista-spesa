let shoppingList = ['Wurstel', 'Latte', 'Uova', 'Pasta', 'Pomodori','Mozzarella', 'Fagioli'];

const list = document.querySelector('ul', '#shopping-list');
let i = 0;

while (i < shoppingList.length) {

    let element = shoppingList[i];
    let elementList = document.createElement('li');
    elementList.innerText = element;
    list.append(elementList);
    
    i++
}