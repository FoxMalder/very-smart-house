import * as React from "react";

export interface CardState {}

export interface CardProps {
    source: string;
    title: string;
    type?: string;
    time: string;
}

export class Card extends React.Component<CardProps, CardState> {
    constructor () {
        // @ts-ignore
        super();
    }

    render () {
        return (
            <div className="card card_size_${card.size} card_type_${card.type === 'critical' ? 'critical' : 'info'}">
                <div className="card__content card__main-content">
                    <div className="card__title-group">
                        <div className="card__icon-container">
                            <span className="card__icon card__icon-${card.icon}"/>
                        </div>
                        <div className="card__title">${this.props.title}</div>
                    </div>
                    <div className="card__info">
                        <div className="card__source">${this.props.source}</div>
                        <div className="card__time">${this.props.time}</div>
                    </div>
                </div>
                <div className="button__close"/>
                <div className="button__next"/>
            </div>
        );
    }
}
