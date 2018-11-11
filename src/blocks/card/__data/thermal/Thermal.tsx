import * as React from "react";

export interface ThermalState {
    temperature: number;
    humidity: number;
}

export interface ThermalProps {
    data: ThermalState;
}

export class Thermal extends React.Component<ThermalProps, ThermalState> {
    constructor(props: Readonly<ThermalProps>) {
        super(props);
    }

    render() {
        return (
            <div className="thermal__container">
                <div className="thermal__temperature">
                    <span className="thermal__title">Температура: </span>
                    <span className="thermal__value">${this.props.data.temperature} С</span>
                </div>
                <div className="thermal__humidity">
                    <span className="thermal__title">Влажность: </span>
                    <span className="thermal__value">${this.props.data.humidity}%</span>
                </div>
            </div>
        )
    }
}
