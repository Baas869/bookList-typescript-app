import React from 'react'
import BookLists from './BookLists'
import { BookContext } from '../contexts/BookData';
import { BookContextType } from '../contexts/BookData';

const BookItems: React.FC = () => {
    const { bookItems } = React.useContext(BookContext) as BookContextType

    if(!bookItems || bookItems.length === 0){
        return <p>No Book added yet!</p>
    }
    return (
        <div className='input-collection-table'>
          
            <div className='mg'>Books Availabe : ({bookItems.length})</div>
    
          <div className="input-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN#</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="book-list">
                    {bookItems.map((book) =>(
                        <BookLists key={book.id} book={book} />
                    ))}
                </tbody>
            </table>
    
          </div>
        </div>
    
      )
}

export default BookItems
