import * as React from "react";
import {Button} from "../../../Button/Button";
import {ButtonThemePrimary} from "../../../Button/_theme/Button_theme_primary";

export interface ButtonsState {}
export interface ButtonsProps {
    buttons: [string];
}

export class Buttons extends React.Component<ButtonsProps, ButtonsState> {
    render() {
        let buttonsList = this.props.buttons.map((btn:string, index:number) => {
            if (btn === 'Да') {
                return <ButtonThemePrimary theme={'primary'} children={btn} key={index}/>
            } else {
                return <Button children={btn} key={index}/>;
            }
        });

        return (
            <div className="buttons__container">
                {buttonsList}
            </div>
        )
    }
}
