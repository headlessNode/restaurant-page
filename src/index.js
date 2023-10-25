import './style.css'
import {homePage} from './home';

document.addEventListener('DOMContentLoaded', ()=>{
    //here goes the page content
    const content = document.querySelector('#content');
    //Default header of the webpage
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Bistro Bliss';
    const links = document.createElement('div');
    links.classList.add('links');
    const linkOne = document.createElement('div');
    linkOne.classList.add('link-1');
    linkOne.textContent = 'HOME';
    const linkTwo = document.createElement('div');
    linkTwo.classList.add('link-2');
    linkTwo.textContent = 'MENU';
    const linkThree = document.createElement('div');
    linkThree.classList.add('link-3');
    linkThree.textContent = 'CONTACT';

    links.appendChild(linkOne);
    links.appendChild(linkTwo);
    links.appendChild(linkThree);

    header.appendChild(title);
    header.appendChild(links);

    const home = homePage();

    content.appendChild(header);
    content.appendChild(home);
});