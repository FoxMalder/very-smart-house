let cardEvents = [];

fetch('http://localhost:8000/api/events', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
}).then(res => res.json())
    .then(res => {
        cardEvents = res.events;
        window.update();
    });

import Card from "./Card";

export default () => {
    return `<div class="cards">
                <div class="cards__title">Лента событий </div>
                <div class="cards__container">
                    ${cardEvents.map(Card).join('')}
                </div>
            </div>`
}
