const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenuWithPrices = ['Pancakes - $6', 'Eggs Benedict - $12', 'Oatmeal - $16', 'Frittata - $20'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenu;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML= mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


let breakfastMenuItemsWithPricesHTML = breakfastMenuWithPrices.map((item, index) => `<p>Item ${index + 1}: item ${item} </p>`).join('')
document.getElementById('breakfastMenuItemsWithPrices').innerHTML = breakfastMenuItemsWithPricesHTML;