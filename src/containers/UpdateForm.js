import React, { Component } from 'react';
import Buttons from '../components/Button';

export class UpdateForm extends Component {
    
    state={id:this.props.id, title:this.props.title, author:this.props.author , nbpages:this.props.nbpages, category:this.props.category };
    
    handleUpdate = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.lunchUpdate(this.state)

    }

    render() {
        return (
            <>
                
                <td style={{ backgroundColor:'white', color:'Black'}}>{this.props.id}</td>
                <td style={{ backgroundColor:'white', color:'Black'}}>
                    <input type="text" value={this.state.title} onChange = {(e) => this.setState({title:e.target.value})} />
                </td>
                <td style={{ backgroundColor:'white', color:'Black'}}>
                    <input type="text" value={this.state.author} onChange = {(e) => this.setState({author:e.target.value})}/>
                </td>
                <td style={{ backgroundColor:'white', color:'Black'}}>
                    <input type="text" value={this.state.nbpages} onChange = {(e) => this.setState({nbpages:e.target.value})} />
                </td>
                <td style={{ backgroundColor:'white', color:'Black'}}>
                    <input type="text" value={this.state.category} onChange = {(e) => this.setState({category:e.target.value})} />
                
                </td >

                <td style={{ backgroundColor:'white'}}>
                    <Buttons variant='btn-success' value="Save" handler={this.handleUpdate} />
                </td>





            
                
                
            </>
        )
    }
}

export default UpdateForm
