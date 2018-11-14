import * as React from "react";
import {Music, MusicState} from "./music/Music";
import {Thermal, ThermalState} from "./thermal/Thermal";
import {Graph} from "./graph/Graph";
import {Buttons} from "./buttons/Buttons";
import {Camera} from "./camera/Camera";

export interface CardDataState extends MusicState, ThermalState {
    type?: string;
    image?: string;
    buttons?: [string];
}

export interface CardDataProps {
    data: CardDataState;
    icon: string;
}

export class CardData extends React.Component<CardDataProps, CardDataState> {
    constructor(props: Readonly<CardDataProps>) {
        super(props);
    }

    render() {
        let dataTemplate;

        if (this.props.icon === 'music') {
            return dataTemplate = <Music data={this.props.data}/>;
        } else if (this.props.icon === 'thermal') {
            return dataTemplate = <Thermal data={this.props.data}/>;
        } else if (this.props.data.type === 'graph') {
            return dataTemplate = <Graph/>;
        } else if (this.props.data.buttons) {
            return dataTemplate = <Buttons buttons={this.props.data.buttons || ['']}/>;
        } else if (this.props.data.image) {
            return dataTemplate = <Camera/>;
        }

        return (
            <div>{dataTemplate}</div>
        )
    }
}
