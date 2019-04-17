import React, {Component} from 'react';


import './style.css';

export default class Item extends Component{

    render(){
        return(
            <div className='items'>
                <h2>{this.props.projeto}</h2>
                <div>{this.props.desc}</div>
                <a href='#'>Info</a>
            </div>
        );
    }
};