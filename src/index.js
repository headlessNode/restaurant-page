import './style.css'

// <div class="header">
// <div class="title">{Restaurant}</div>
// <div class="links">
//     <div class="link-1">HOME</div>
//     <div class="link-2">MENU</div>
//     <div class="line-3">CONTACT</div>
// </div>
// </div>
// <div class="main"></div>

document.addEventListener('DOMContentLoaded', ()=>{
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = '{Restaurant}';
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

    const main = document.createElement('div');
    main.classList.add('main');

    content.appendChild(header);
    content.appendChild(main);
});