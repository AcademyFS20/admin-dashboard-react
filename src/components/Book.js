
import Buttons from './Button';
export default function Book(props) {
   
    const {id,title,nbpages,author,category} = props
    
    return (
            <>
               
                <td >{id}</td>
                <td >{title}</td>
                <td>{author}</td>
                <td>{nbpages}</td>
                <td>{category}</td>
                <td>
                    <Buttons variant='btn-warning' type='button' value='Update' handler={props.modification}> </Buttons> 
                    <Buttons variant='btn-danger' type='button' handler={props.handleDelete} value='Delete' >  </Buttons>
                </td> 

            </>
                         
    )
}
