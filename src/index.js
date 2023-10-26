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
    const linkOne = document.createElement('button');
    linkOne.classList.add('link-1');
    linkOne.textContent = 'HOME';
    const linkTwo = document.createElement('button');
    linkTwo.classList.add('link-2');
    linkTwo.textContent = 'MENU';
    const linkThree = document.createElement('button');
    linkThree.classList.add('link-3');
    linkThree.textContent = 'CONTACT';

    links.appendChild(linkOne);
    links.appendChild(linkTwo);
    links.appendChild(linkThree);

    header.appendChild(title);
    header.appendChild(links);

    const pages = document.createElement('div');
    pages.classList.add('pages');

    //other pages
    let homeClicked = true;
    let menuClicked = false;
    let contClicked = false;
    let pageClicked = false;
    let bottomBorder = '1px solid #f5f5f5';
    linkOne.addEventListener('click', ()=>{

        homeClicked = true;
        linkOne.style.borderBottom = bottomBorder;
        linkTwo.style.borderBottom = 'none';
        linkThree.style.borderBottom = 'none';
        menuClicked = false;
        contClicked = false;
        pageClicked = true;
        changeCurrentPage();
        pageClicked = false;
    });

    linkTwo.addEventListener('click', ()=>{

        menuClicked = true;
        linkTwo.style.borderBottom = bottomBorder;
        linkOne.style.borderBottom = 'none';
        linkThree.style.borderBottom = 'none';
        homeClicked = false;
        contClicked = false;
        pageClicked = true;
        changeCurrentPage();
        pageClicked = false;
    });

    linkThree.addEventListener('click', ()=>{
        contClicked = true;
        linkThree.style.borderBottom = bottomBorder;
        linkOne.style.borderBottom = 'none';
        linkTwo.style.borderBottom = 'none';
        homeClicked = false;
        menuClicked = false;
        pageClicked = true;
        changeCurrentPage();
        pageClicked = false;
    })

    function changeCurrentPage(){
        if(pageClicked){

            if(homeClicked){
                pages.removeChild(pages.firstChild);
                const home = homePage();
                pages.appendChild(home);

            }
            else if(menuClicked){
                pages.removeChild(pages.firstChild);
                const menu = menuPage();
                pages.appendChild(menu);
                
            }
            else if(contClicked){
                pages.removeChild(pages.firstChild);
                const contact = contactPage();
                pages.appendChild(contact);
                
            }
        }
        else{
            const home = homePage();
            pages.appendChild(home);
        }
    }

    

    content.appendChild(header);
    content.appendChild(pages);
    changeCurrentPage();

});