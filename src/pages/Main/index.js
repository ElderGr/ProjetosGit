import React, {Component} from 'react';
import Container from '../../components/containerMain/index';
import './style.css';

export default class Main extends Component{

    render(){
        return(
            <div className='containerMain'>
                <Container width='25%' tipo='perfil' login={this.props.match.params}/>
                <Container width='75%' tipo='projetos' login={this.props.match.params}/>
            </div>
        )
    };
}