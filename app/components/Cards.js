import cardEvents from '../../mock/events';

import Card from "./Card";

export default () => {
    return `<div class="cards">
                <div class="cards__title title">Лента событий </div>
                <div class="cards__container">
                    ${cardEvents.events.map(Card).join('')}
                </div>
            </div>`
}
