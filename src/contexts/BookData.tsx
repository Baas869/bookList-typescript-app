import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";
import { IBookProps } from "../components/module/Books";



interface IEditBookProps{
    book: IBookProps;
    edit: boolean
  }

  interface IUpdatedBookProps {
    id: any;
    updatedBook: IBookProps
}

export type BookContextType = {
    book: IBookProps;
    bookItems: IBookProps[];
    editBookItems: IEditBookProps;
    deleteBook: (id: any) => void;
    setBook: React.Dispatch<React.SetStateAction<IBookProps>>;
    handleBook: (addFeedback: IBookProps) => void;
    editBook: (book: IBookProps) => void;
    setEditBookItems: React.Dispatch<React.SetStateAction<IEditBookProps>>;
    updateEditBook: (id: any, updatedBook: IBookProps) => void;
  };

  
export  const BookContext = createContext<BookContextType | null>(null);


const BookProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    // INPUTS STATE
    const [book, setBook] = useState<IBookProps>({
        title: '',
        author: '',
        isbn: '',
    })
    //EDIT STATE
    const [editBookItems, setEditBookItems] = useState<IEditBookProps>({
        book: {
            title: '',
            author: '',
            isbn: '',
        },
        edit: false
    })
    //BOOKITEMS STATE
    const [bookItems, setBookItems] = useState<IBookProps[]>([
    {
        id: 1, 
        title: 'Go back home', 
        author: 'Shakto Baas', 
        isbn: '8696'
    },
    {
        id: 2, 
        title: 'No place like home', 
        author: 'Adeola', 
        isbn: '1932'
    },
    {
        id: 3, 
        title: 'Welcome back home', 
        author: 'Omowumi', 
        isbn: '4334'
    }
    ])

    //Add book
    const handleBook = (addFeedback: IBookProps) => {
        addFeedback.id = uuidv4()
        setBookItems([addFeedback, ...bookItems])
    }

    //Delete book
      //DELTE BOOK
      const deleteBook =  (id: any) =>{
        if(window.confirm('Are you sure, you want to delete book')){
          setBookItems(bookItems.filter((book) => (
            book.id !== id)
          ))
        }
   }

   //EDIT BOOK
   const editBook = (book: IBookProps) =>{
        setEditBookItems({
            book,
            edit: true
        })
   }

   //UPDATE BOOK
   const updateEditBook = (id: any, updatedBook: IBookProps) => {
        setBookItems(bookItems.map((book) => (book.id === id ? {...book, ...updatedBook} : book)))
   }
    return (
        <BookContext.Provider value={{
            book,
            bookItems,
            editBookItems,
            setBook,
            handleBook,
            deleteBook,
            editBook,
            setEditBookItems,
            updateEditBook,
            }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider