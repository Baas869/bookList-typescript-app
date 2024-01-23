import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { IBookProps } from './module/Books'
import { BookContext } from '../contexts/BookData';
import { BookContextType } from '../contexts/BookData';

interface Props {
    book: IBookProps;
    // deleteBook: (id: any) => void;
}
const BookLists: React.FC<Props> = ({ book }) => {
  const { deleteBook, editBook } = React.useContext(BookContext) as BookContextType

  return (
    <>
        <tr>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.isbn}#</td>
          <td><a href="#" className="edit" onClick={() => editBook(book)} ><FaIcons.FaEdit /></a></td>
          <td><a href="#" className="delete" onClick={() => deleteBook(book.id)}><FaIcons.FaTimes /></a></td>
        </tr>
    </>
  )
}

export default BookLists
