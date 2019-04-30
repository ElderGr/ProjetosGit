import React, {Component} from 'react';
import Button from '../link/index';

import './style.css';

export default class Item extends Component{

    render(){
        if(this.props.tipo === 'perfil'){
            return(
                <div className='perfil fadeIn '>
                    <img src={this.props.avatar} alt='Avatar'/>
                    <h2>{this.props.nome}</h2>
                    <Button tipo='logoff' text='Trocar de usuário'/>
                </div>
            );
        } else{
            return(
                <div className='items fadeIn '>
                    <h2>{this.props.projeto}</h2>
                    <div>{this.props.desc}</div>
                    <Button tipo='info' text='Ver' redirect={this.props.redirect}/>
                </div>
            );
        }
        
    }
};