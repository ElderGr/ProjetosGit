import React, {Component} from 'react';
import Item from '../item/index';
import api from '../../services/api';

import './style.css';

export default class Container extends Component{

    constructor(props){
        super();
        
        this.state = {
            projects: [],
            perfilItems: [],
            projectsRender: []
        }
    }

    async componentDidMount(){
        
        this.loadItem();

    }


    loadItem = async () =>{

        let response;
        const {user} = this.props.login;

        if(this.props.tipo === 'projetos'){
           
            response = await api.get(`${user}/repos`);
            this.setState({ 
                projects: response.data,
                projectsRender: response.data
            });

            
        }else{
            
            response = await api.get(`${user}`);   
            this.setState({ 
                perfilItems: response.data
             }); 

            
        }
    }

    searchValue = e =>{

        let teste = [];

        this.state.projects.map(function(value, index){
            let {name} = value;

            if(name.toLowerCase().indexOf(e.target.value) >= 0){
                
               teste.push(value);

            }
        });

        this.setState({
            projectsRender: teste
        });
    }

    render(){
        if(this.props.tipo === 'perfil'){
            return(
                <div className='container' style={{width: this.props.width, maxHeight: '67vh'}}> 
                    <Item nome={this.state.perfilItems.login} avatar={this.state.perfilItems.avatar_url} tipo={this.props.tipo}/> 
                </div>
            )
        } else{
            return(
                <div className='container' style={{width: this.props.width}}> 
                    <div className='search'>
                        <input placeholder='Search...' onChange={this.searchValue}/>
                        <button disabled><i className="fas fa-search"></i></button>
                    </div>
                    {this.state.projectsRender.map( projects => <Item key={projects.id} projeto={projects.name} desc={projects.description} tipo={this.props.tipo} redirect={projects.html_url}></Item> )} 
                </div>
              
            )
        }
        
    }
}