import * as React from "react";

const graphImg = require('../../../../assets/graph.png');

export interface GraphState {}
export interface GraphProps {}

export class Graph extends React.Component<GraphProps, GraphState> {
    render() {
        return (
            <img className="graph__image image" src={graphImg}/>
        )
    }
}
