import React, {Component} from 'react';
import './style.css';

export default class Link extends Component{
    render(){
        if(this.props.tipo == 'logoff'){

            return(
                <a className='link' href='#' style={{width:'100%', display: 'flex', justifyContent: 'center', padding: '5% 0'}}>
                    {this.props.text}
                </a>
            )
        }else{

            return(
                <a className='link' href='#'>
                    {this.props.text}
                </a>
            )

        }
        
    };
}