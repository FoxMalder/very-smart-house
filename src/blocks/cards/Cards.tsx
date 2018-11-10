import * as React from "react";

let eventsMock = require('./events');

let cardEvents = eventsMock.events;
console.log(cardEvents);

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
    });

// import Card from "./Card";

export const Cards = () => (
    <div className="cards">
        <div className="cards__title title">Лента событий</div>
        <div className="cards__container">
        </div>
    </div>
);
