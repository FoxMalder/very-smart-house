import icons from '../assets/icons.svg';

export default (card) => {
    return `<div class="card">
                <div>
                    <div class="card__main-content">
                        <svg viewBox="0 0 24 24" class="card__icon">
                            <use xlink:href="${icons}#${card.icon}"></use>
                        </svg>
                        <div class="card__title">${card.title}</div>
                        <div class="card__source">${card.source}</div>
                        <div class="card__time">${card.time}</div>
                    </div>
                    <div class="card__additional-content">
                        <div class="card__description">${card.description}</div>
                    </div>
                </div>
            </div>`
}
