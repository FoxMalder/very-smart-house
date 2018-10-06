import icons from '../assets/icons.svg';
import cardData from './Card-data'

export default (card) => {
    return `<div class="card card_size_${card.size} card_type_${card.type === 'critical' ? 'critical' : 'info'}">
                <div class="card__content card__main-content">
                    <svg viewBox="0 0 24 24" class="card__icon">
                        <use xlink:href="${icons}#${card.icon}"></use>
                    </svg>
                    <div class="card__title">${card.title}</div>
                    <div class="card__source">${card.source}</div>
                    <div class="card__time">${card.time}</div>
                </div>
                <div class="card__content card__additional-content">
                    ${card.description ? '<div class="card__description">' + card.description + '</div>' : ''}
                    ${card.data ? '<div class="card__data">' + cardData(card) + '</div>' 
                    : ''}
                </div>
            </div>`
}
