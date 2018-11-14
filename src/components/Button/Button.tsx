import * as React from 'react';
import {MouseEventHandler} from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

export const cnButton = cn('Button');

export interface ButtonState {}
export interface ButtonProps {
    className?: string;
    theme?: 'default' | string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (
            <button type="button" className={cnButton({
                theme: this.props.theme,
                disabled: this.props.disabled
            }, [this.props.className])}>
                {this.props.children}
            </button>
        );
    }
}
