import * as React from "react";
import {Card} from "../card/Card";

const eventsMock = require('../../mock/events');

interface CardState {
    source: string;
    title: string;
    type?: string;
    time: string;
}

export interface CardsState {
    cardEvents?: Card[]
}

export interface CardsProps {}

export class Cards extends React.Component<CardsProps, CardsState, CardState> {
    state: any = { cardEvents: eventsMock.events};

    render() {
        let cardsList = this.state.cardEvents.map((event:CardState) => {
            return <Card source={event.source} title={event.title} time={event.time} />;
        });

        return (
            <div className="cards">
                <div className="cards__title title">Лента событий</div>
                <div className="cards__container">
                    {cardsList}
                </div>
            </div>
        )
    }
}
