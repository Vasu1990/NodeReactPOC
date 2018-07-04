import React from 'react';
import  {render} from "react-dom";

import App from "./components/App"

const data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
render(<App content ={data}/>, document.getElementById('root'));