import React, {Component} from 'react';
import Item from '../item/index';

import axios from 'axios';

import './style.css';

export default class Container extends Component{

    constructor(props){
        super();
        
        this.state = {
            persons: []
        }
    }

    async componentDidMount(){
        axios.get('https://api.github.com/users/ElderGr/repos')
            .then(res =>{
                   const persons = res.data;
                   this.setState({ persons });   
        });
    }

    inserirItem = event =>{
        // return (
            {this.state.persons.map( person => <Item key={person.id} projeto={person.name} desc={person.description} ></Item> )} 
        // )
    }

    render(){

        return(
            <div className='container' style={{width: this.props.width}}>
                {this.props.tipo == 'projetos' ? '' : this.inserirItem()}
            </div>
        )
    }
}