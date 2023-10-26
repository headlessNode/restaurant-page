export function menuPage(){

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const dishOne = document.createElement('div');
    dishOne.classList.add('dish-one');
    dishOne.classList.add('dishes');
    
    const dishOneTitle = document.createElement('h2');
    dishOneTitle.textContent = 'Dish One';

    const dishOnePrice = document.createElement('p');
    dishOnePrice.textContent = '$8';

    const dishOneDescript = document.createElement('div');
    dishOneDescript.classList.add('dish-description');
    dishOneDescript.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet.';

    const dishTwo = document.createElement('div');
    dishTwo.classList.add('dish-two');
    dishTwo.classList.add('dishes');
    
    const dishTwoTitle = document.createElement('h2');
    dishTwoTitle.textContent = 'Dish Two';

    const dishTwoPrice = document.createElement('p');
    dishTwoPrice.textContent = '$10';

    const dishTwoDescript = document.createElement('div');
    dishTwoDescript.classList.add('dish-description');
    dishTwoDescript.textContent = 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.';

    const dishThree = document.createElement('div');
    dishThree.classList.add('dish-three');
    dishThree.classList.add('dishes');
    
    const dishThreeTitle = document.createElement('h2');
    dishThreeTitle.textContent = 'Dish Three';

    const dishThreePrice = document.createElement('p');
    dishThreePrice.textContent = '$12';

    const dishThreeDescript = document.createElement('div');
    dishThreeDescript.classList.add('dish-description');
    dishThreeDescript.textContent = 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.';

    const dishFour = document.createElement('div');
    dishFour.classList.add('dish-four');
    dishFour.classList.add('dishes');
    
    const dishFourTitle = document.createElement('h2');
    dishFourTitle.textContent = 'Dish Four';

    const dishFourPrice = document.createElement('p');
    dishFourPrice.textContent = '$16';

    const dishFourDescript = document.createElement('div');
    dishFourDescript.classList.add('dish-description');
    dishFourDescript.textContent = 'Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.';


    dishOne.appendChild(dishOneTitle);
    dishOne.appendChild(dishOnePrice);
    dishOne.appendChild(dishOneDescript);

    dishTwo.appendChild(dishTwoTitle);
    dishTwo.appendChild(dishTwoPrice);
    dishTwo.appendChild(dishTwoDescript);

    dishThree.appendChild(dishThreeTitle);
    dishThree.appendChild(dishThreePrice);
    dishThree.appendChild(dishThreeDescript);

    dishFour.appendChild(dishFourTitle);
    dishFour.appendChild(dishFourPrice);
    dishFour.appendChild(dishFourDescript);


    menuContainer.appendChild(dishOne);
    menuContainer.appendChild(dishTwo);
    menuContainer.appendChild(dishThree);
    menuContainer.appendChild(dishFour);

    menu.appendChild(menuContainer);

    return menu;

}