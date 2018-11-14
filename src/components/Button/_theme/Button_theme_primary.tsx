import {withBemMod} from '@bem-react/core';

import {Button, cnButton} from '../Button';

import './Button_theme_primary.css';

export const ButtonThemePrimary = withBemMod(cnButton(), {theme: 'primary'})(Button);
