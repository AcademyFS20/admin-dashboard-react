import React, { Component } from 'react'
import Buttons from '../components/Button';
import Books from'./Books';

class AddForm extends Component{
    state = {bookName: '',authorName: '',nbpages:'',category: '',errTitle: '',errAuthor: '',errNbPages: '',errCategory: ''};
    
    hundleValidate = () => {
        let errorTitle = '';
        let errorAutor ='';
        let errorNbPages = '';
        let errorCategory = '';

            if(this.state.bookName === '')
            {
                errorTitle = 'le titre du livre ne peut pas être vide';
            }
       
            if(this.state.authorName === '')
            {
                errorAutor = 'auteur du livre ne peut pas être vide';
             }    
            if(this.state.nbpages === '' || this.state.nbpages === 0)
            {
                errorNbPages = 'le titre du livre ne peut pas être vide ou egal a 0';
            }
            if(this.state.category === '')
            {
                errorCategory = 'categorie du livre ne peut pas être vide';
            }

            if(errorTitle || errorAutor || errorNbPages || errorCategory ){

                this.setState({errTitle: errorTitle, errAuthor: errorAutor,errNbPages:errorNbPages,errCategory:errorCategory})
                return false;
            }

            return true;
  
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        const isValid = this.hundleValidate();
        //console.log(isValid);
        if(isValid)
        {

            this.props.validation(
                this.state.bookName,
                this.state.authorName,
                this.state.nbpages,
                this.state.category
            )

            this.setState({

                bookName: '',authorName: '',nbpages:'',category: '',errTitle: '',errAuthor: '',errNbPages: '',errCategory: ''

            })
            
        } 
    }

    render() {

        return (
            <div>
                
                <form style={{ backgroundColor:'white', marginTop: '10px',display: 'flex',flexDirection: 'column', justifyContent: 'center',alignItems: 'center', alignContent: 'center'}} >
                    <input type="text" placeholder="Book name" value={this.state.bookName} onChange = {(e) => this.setState({bookName:e.target.value})} />
                        {
                            this.state.errTitle ? <div style={{color:'red'}}>ERROR</div> : null
                        }
                        <input type="text" placeholder="author name"  style={{marginTop:'10px'}} value={this.state.authorName} onChange ={(e) => this.setState({authorName:e.target.value})} />
                        {
                            this.state.errAuthor ? <div style={{color:'red'}}>ERROR</div> : null
                        }
                        <input type="text" placeholder="nombre de pages"  style={{marginTop:'10px'}}value={this.state.nbpages} onChange = {(e) => this.setState({nbpages:e.target.value})}/>
                        {
                            this.state.errNbPages ? <div style={{color:'red'}}>ERROR</div> : null
                        }
                        <input type="text" placeholder="Fantasy"  style={{marginTop:'10px', marginBottom:'10px'}} value={this.state.category} onChange = {(e) => this.setState({category:e.target.value})} />
                        {
                            this.state.errCategory ? <div style={{color:'red'}}>ERROR</div> : null
                        }
                        <Buttons type="submit" variant="btn-success"  handler={this.handleSubmit} value='SAVE'/> 
                        
                </form>   
                
            </div>
           
        )
    }
}

export default AddForm
