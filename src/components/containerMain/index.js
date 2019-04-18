import React, {Component} from 'react';
import Item from '../item/index';

import axios from 'axios';

import './style.css';

export default class Container extends Component{

    constructor(props){
        super();
        
        this.state = {
            projects: [],
            perfilItems: []
        }
    }

    async componentDidMount(){
        if(this.props.tipo == 'projetos'){
            axios.get('https://api.github.com/users/ElderGr/repos')
                .then(res =>{
                    const projects = res.data;
                    this.setState({ projects });   
            });
        }else{
            axios.get('https://api.github.com/users/ElderGr')
            .then(res =>{
                const perfilItems = res.data;
                this.setState({ perfilItems });  
                console.log(perfilItems); 
            });
        }
    }

    render(){
        if(this.props.tipo == 'perfil'){
            return(
                <div className='container' style={{width: this.props.width}}> 
                    <Item nome={this.state.perfilItems.login} avatar={this.state.perfilItems.avatar_url} tipo={this.props.tipo}/> 
                </div>
            )
        } else{
            return(
                <div className='container' style={{width: this.props.width}}> 
                    {this.state.projects.map( projects => <Item key={projects.id} projeto={projects.name} desc={projects.description} tipo={this.props.tipo}></Item> )} 
                </div>
            )
        }
        
    }
}