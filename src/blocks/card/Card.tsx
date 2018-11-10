import * as React from "react";

import {CardData} from "./__data/CardData";

export interface CardState {
    description?: string;
    source: string;
    title: string;
    time: string;
    icon: string;
    type?: string;
    data?: any;
}

export interface CardProps {
    event: CardState;
}

export class Card extends React.Component<CardProps, CardState> {
    constructor(props: Readonly<CardProps>) {
        super(props);
    }

    render() {
        let data;
        let description;
        let additionalContent;

        if (this.props.event.description) {
            description = <div className="card__description">{this.props.event.description}</div>;
        } else {
            description = '';
        }

        if (this.props.event.data) {
            data = (
                <div className="card__data">
                    <CardData data={this.props.event.data} icon={this.props.event.icon}/>
                </div>
            );
        } else {
            data = '';
        }

        if (this.props.event.description || this.props.event.data) {
            additionalContent = (
                <div className="card__content card__additional-content">
                    {description}
                    {data}
                </div>
            );
        } else {
            additionalContent = '';
        }

        return (
            <div className="card card_size_${card.size} card_type_${card.type === 'critical' ? 'critical' : 'info'}">
                <div className="card__content card__main-content">
                    <div className="card__title-group">
                        <div className="card__icon-container">
                            <span className="card__icon card__icon-${card.icon}"/>
                        </div>
                        <div className="card__title">{this.props.event.title}</div>
                    </div>
                    <div className="card__info">
                        <div className="card__source">{this.props.event.source}</div>
                        <div className="card__time">{this.props.event.time}</div>
                    </div>
                </div>
                {additionalContent}
                <div className="button__close"/>
                <div className="button__next"/>
            </div>
        );
    }
}
