export function contactPage(){

    const cont = document.createElement('div');
    cont.classList.add('contact-page');

    const container = document.createElement('div');
    container.classList.add('contact-container');

    const info = document.createElement('div');
    info.classList.add('info');
    const location = document.createElement('div');
    location.classList.add('address');
    location.classList.add('details');
    location.innerHTML = '<i class="fa-solid fa-location-dot fa-lg" style="color: #f5f5f5f5;"></i><p>1024 Oakwood Ave San Diego, CA 22434</p>';

    const timing = document.createElement('div');
    timing.classList.add('timing');
    timing.classList.add('details');
    timing.innerHTML = '<i class="fa-solid fa-clock" style="color: #f5f5f5;"></i><p>Mon - Sun: 8am - 10pm</p>'

    const call = document.createElement('div');
    call.classList.add('calling-info');
    call.classList.add('details');
    call.innerHTML = '<i class="fa-solid fa-phone" style="color: #f5f5f5;"></i><p>(111) - 222 3333</p>'

    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add('details');
    message.innerHTML = '<i class="fa-solid fa-envelope" style="color: #f5f5f5;"></i><h4>Message us</h4>'

    const form = document.createElement('div');
    form.classList.add('message-form');
    form.innerHTML = '<form><input class="form-element" type="text" placeholder="Name"><input class="form-element" type="email" placeholder="Email"><textarea class=class="form-element" rows="3" placeholder="Message"></textarea><button>Send</button></form>'

    info.appendChild(location);
    info.appendChild(timing);
    info.appendChild(call);
    info.appendChild(message);
    info.appendChild(form);


    container.appendChild(info);

    cont.appendChild(container);

    return cont;
}