import * as React from "react";
import {Card, CardState} from "../card/Card";

const eventsMock = require('../../mock/events');

export interface CardsState {
    cardEvents: CardState[];
}

export interface CardsProps {}

export class Cards extends React.Component<CardsProps, CardsState, CardState> {
    state: CardsState = {
        cardEvents: eventsMock.events
    };

    render() {
        let cardsList = this.state.cardEvents.map((event:CardState, index:number) => {
            return <Card event={event} key={index}/>;
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
