import React, { useContext, useEffect, useState } from 'react'
import Button from './share/Button';
import { BookContext } from '../contexts/BookData';
import { BookContextType } from '../contexts/BookData';


const Inputs: React.FC = () => {

    const { handleBook, book, setBook, editBookItems, updateEditBook, setEditBookItems} = useContext(BookContext) as BookContextType

    const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
    const [isbnDisabled, setIsbnDisabled] = useState<boolean>(false)
    const [textCondition, setTextCondition] = useState<string>('')


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setBook({...book, 
                [e.target.name]: e.target.value
            })
    }
    useEffect(() =>{
        if(editBookItems.edit === true){
            setBook(editBookItems.book)
            setTextCondition('ISBN can\'t be modify')
        }
    }, [editBookItems])
    useEffect(() => {
        if(book.title !== '' && book.author !== '' && book.isbn?.length === 4 ){
            setBtnDisabled(false)
            setIsbnDisabled(true)
        }
          
       
            if(book.isbn?.length === 1){
                if(editBookItems.edit === false){
                    setTextCondition('ISBN must be 4 digits number')
                }
            }else  if(book.isbn?.length === 0 ){
                setTextCondition('')
            }
        
    }, [book])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(!btnDisabled){
            if(editBookItems.edit === true){
                updateEditBook(editBookItems.book.id, book) 
            }else{
                handleBook(book)
            }
            setBook({
                title: '',
                author: '',
                isbn: ''
            })
            setBtnDisabled(true)
            setIsbnDisabled(false)
        }
    }
   
    const clearInputs = (e:  React.FormEvent) => {
        setBook({
            title: '',
            author: '',
            isbn: ''
        })
        setBtnDisabled(true)
        setIsbnDisabled(false)
        setTextCondition('')
        setEditBookItems({
            book: {
                title: '',
                author: '',
                isbn: '',
            },
            edit: false
        })
        
        e.preventDefault()
    }

    return (
        <div className='book-app'>
            <form onSubmit={handleSubmit}>
                <h2 className='mg-t mg-b'>Add Book</h2>
                <div className='mg-t mg-b'>
                    <input onChange={handleInput} type='text' 
                    className='input-primary'
                    name='title'
                    placeholder='Book Title ' 
                    value={book.title}
                    />
                </div>
                <div className='mg-t mg-b'>
                    <input onChange={handleInput} 
                    className='input-primary' type='text' 
                    name='author'
                    placeholder='Book Author' 
                    value={book.author}
                    />
                    
                </div>
                <div className='mg-t mg-b'>
                    <input data-testid='count' onChange={handleInput} 
                    className='input-primary' type='number' 
                    name='isbn'
                    placeholder='ISBN' 
                    value={book.isbn}
                    disabled={isbnDisabled} 
                    />
                    <div className={editBookItems.edit === true ? 'mg-b error' : 'mg-b sucess'} style={{fontStyle: 'italic', marginTop: '5px'}}>{textCondition}</div>
                </div>
                {/* add radio button to reset the input */}
                <button onClick={clearInputs} className='btn-primary mg btn-clear' style={{padding: '5px', color: '#fff', fontSize: '13px', cursor: 'pointer'}}>clear inputs</button>
                {/* add submit button */}
                <Button type='submit' version='primary' isDisabled={btnDisabled}>Add book</Button>
            </form>
        </div>
        
      )
}

export default Inputs
