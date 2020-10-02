import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const author = {
    name: 'Gerardo Vazquez',
    birthdate: '31 - ago - 2020',
}
const categories = [
    {
        id: 1,
        name: 'Terror',
        isChecked: true
    },
    {
        id: 2,
        name: "Romanticas",
        isChecked: false
    },
    {
        id: 3,
        name: 'Comedia',
        isChecked: true
    }
]

const flavors = [
    {
        id: 1,
        label: 'grapefruit',
        field: 'Grapefruit',
    },
    {
        id: 2,
        label: 'lime',
        field: 'Lime',
    },
    {
        id: 3,
        label: 'coconut',
        field: 'Coconut',
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App author={author} authorCategories={categories} flavors={flavors} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
