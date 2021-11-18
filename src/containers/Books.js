import React, { Component } from 'react'
import dataBook from '../data/data'; 
import Book from '../components/Book';
import AddForm from './AddForm';
import Buttons from '../components/Button';
import UpdateForm from './UpdateForm';



export class Books extends Component {
    state = {dataBook:dataBook,showForm:false,idBook:0};
  
    handlerAdd = () => {
        
        this.setState(() => {
          return {showForm:!this.state.showForm};
        });
               
      }


    delete = (id) => {

        /**  finindexx */
        const index = dataBook.findIndex(book => book.id === id);
        
        const newTAB = dataBook.splice(index, 1);
        
       this.setState(() => {

            return {newTAB};

        })
    }


    addBook = (bookname,author,category,nbpages) => {
        
        const newBook = {
            id:Math.floor(Math.random() * 100),
            title:bookname,author,category,nbpages

        }

        
        const newList = [...this.state.dataBook];
        newList.push(newBook);
        console.log(newList);
        this.setState({dataBook:newList});
    }

    update = (newState) => {
        const index = dataBook.findIndex(book => book.id === newState.id);
        dataBook[index]= newState;
        this.setState(dataBook);
        console.log(dataBook[index]);
        this.state.idBook=0
        console.log(this.state);
        
    }
    render() {
        return (

        <>
            {
                this.state.dataBook.map(book =>{
                    if(book.id !== this.state.idBook)
                    {
                        return(
                            <tr className="table-light" key={book.id}>
                                <Book id={book.id} title={book.title} nbpages={book.nbpages} 
                                author={book.author} category={book.category} 
                                handleDelete={() => this.delete(book.id)
                                
                                }  
                                
                                modification={() => this.setState({idBook:book.id})}
                                /> 
                                
                            </tr>
                                
                            );
                    }

                    else {

                        return(<tr key={book.id}>
                             <UpdateForm lunchUpdate={this.update} id={book.id} title={book.title} nbpages={book.nbpages} author={book.author} category={book.category}  />
                            </tr>)
                    }
                   

                })                  
            }
            
            <Buttons type="button" variant="btn-info" handler= {this.handlerAdd} value={ this.state.showForm ? 'CLOSE' : 'ADD BOOK'}>   </Buttons>
                
                {
                  this.state.showForm ?  <AddForm  validation = {this.addBook}   />  : null
                }
            

        </>
        )
    }
}

export default Books;
