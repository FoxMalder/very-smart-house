import cardData from './Card-data'

export default (card) => {
    return `<div class="card card_size_${card.size} card_type_${card.type === 'critical' ? 'critical' : 'info'}">
                <div class="card__content card__main-content">
                    <div class="card__title-group">
                        <div class="card__icon-container">
                            <span class="card__icon card__icon-${card.icon}"></span>
                        </div>
                        <div class="card__title">${card.title}</div>
                    </div>
                    <div class="card__info">
                        <div class="card__source">${card.source}</div>
                        <div class="card__time">${card.time}</div>
                    </div>
                </div>
                ${card.description || card.data ?
                    ('<div class="card__content card__additional-content">'
                        + descriptionTemplate(card.description) 
                        + dataTemplate(card) 
                    + '</div>'): ''}
                <div class="button__close"></div>
                <div class="button__next"></div>
            </div>`
}

function descriptionTemplate(description) {
    if (description) {
        return `<div class="card__description">${description}</div>`;
    }

    return ''
}

function dataTemplate(card) {
    if (card.data) {
        return `<div class="card__data">${cardData(card)}</div>`
    }

    return ''
}
