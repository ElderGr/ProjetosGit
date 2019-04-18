import React, {Component} from 'react';
import Link from '../link/index';

import './style.css';

export default class Item extends Component{

    render(){
        if(this.props.tipo == 'perfil'){
            return(
                <div className='perfil'>
                    <img src={this.props.avatar} alt='Avatar'/>
                    <h2>{this.props.nome}</h2>
                    <Link tipo='logoff' text='Trocar de usuário'/>
                </div>
            );
        } else{
            return(
                <div className='items'>
                    <h2>{this.props.projeto}</h2>
                    <div>{this.props.desc}</div>
                    <Link tipo='info' text='Info'/>
                </div>
            );
        }
        
    }
};