export function homePage(){
    const home = document.createElement('div');
    home.classList.add('home');
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerHTML = '<h1>Discover Delicious Moments at Bistro Bliss</h1><p>Join us and experience the genuine joy of exceptional food</p><p>Reserve your table today</p><button>Reserve Now!</button>';
    
    const homeOrder = document.createElement('div');
    homeOrder.classList.add('order-home');
    homeOrder.innerHTML = '<p>Can\'t dine in? No worries!</p><button>Order Now!</button>'
    
    home.appendChild(headline);
    home.appendChild(homeOrder);

    return home;
}