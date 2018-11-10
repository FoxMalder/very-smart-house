import * as React from 'react';

import './app.css';

import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Content} from "../content/Content";

export const App = () => (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
);
