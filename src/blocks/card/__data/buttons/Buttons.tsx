import * as React from "react";

export interface ButtonsState {}
export interface ButtonsProps {
    buttons: [string];
}

export class Buttons extends React.Component<ButtonsProps, ButtonsState> {
    render() {
        let buttonsList = this.props.buttons.map((btn:string, index:number) => {
            return <div className="button button__${index}" key={index}>{btn}</div>;
        });

        return (
            <div className="buttons__container">
                {buttonsList}
            </div>
        )
    }
}
