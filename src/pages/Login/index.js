import React, {Component} from 'react';
import Button from '../../components/link/index';
import './style.css';

export default class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            login: '',
        }
    }

    capturaLogin = e =>{
        this.setState({
            login: e.target.value
        });
    }

    // teste = () =>{
    //    const {teste} = this.props.match.params;
    //    console.log(teste); 
    // }

    render(){
        return(
            <div className='login fadeIn'>
                <h2> Entre com seu Login <span> GITHUB </span> </h2>
                <input onChange={this.capturaLogin} placeholder='Digite seu nome de usuário' />
                <Button text='Entrar' tipo='logon' content={this.state.login}/>
            </div>
        )
    }
}