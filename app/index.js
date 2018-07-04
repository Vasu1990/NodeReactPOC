import React from 'react';
import  {hydrate} from "react-dom";

import App from "./components/App"

var data;
if(window.data) {
    data = window.data;
} else {
    data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
}
hydrate(<App content ={data}/>, document.getElementById('root'));