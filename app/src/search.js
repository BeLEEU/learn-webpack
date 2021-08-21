'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import cat from './image/cat.png'

class Search extends React.Component {

    render() {
        return(
            <div>
                <div className='div'>Search Text</div>
                <img src={cat}/>
                <div>Search Call</div>
            </div>
        ) 
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
);
