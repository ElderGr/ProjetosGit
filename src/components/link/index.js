import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Button extends Component{
    render(){

        let retorno;

        switch(this.props.tipo){
            case 'logoff':
                retorno = 
                    <Link className='link' to='/' style={{width:'100%', display: 'flex', justifyContent: 'center', padding: '5% 0'}}>
                        {this.props.text}
                    </Link>
            break;
            
            case 'logon':
                retorno = 
                    <Link className='link' to={`/Main/${this.props.content}`} style={{width:'100%', display: 'flex', justifyContent: 'center', padding: '5% 0'}}>
                        {this.props.text}
                    </Link>
            break;

            case 'info':
                retorno = 
                    <a className='link' target='_blank' href={this.props.redirect} style={{width:'25%', display: 'flex', justifyContent: 'center', padding: '1% 0'}}>
                        {this.props.text}
                    </a>
            break;

            default:
                
                retorno = 
                    <Link className='link' to='/'>
                        {this.props.text}
                    </Link>
            
            break;
        }

        return retorno;
        // if(this.props.tipo == 'logoff'){

        //     return(
        //         <a className='link' href='#' style={{width:'100%', display: 'flex', justifyContent: 'center', padding: '5% 0'}}>
        //             {this.props.text}
        //         </a>
        //     )
        // }else{

        //     return(
        //         <a className='link' href='#'>
        //             {this.props.text}
        //         </a>
        //     )

        // }
        
    };
}