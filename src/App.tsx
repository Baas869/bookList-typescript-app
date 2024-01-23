import Inputs from './components/Inputs'
import BookItems from './components/BookItems';
import { useState } from 'react';
import { IBookProps } from './components/module/Books';
import BookProvider from './contexts/BookData';

function App() {
  // INPUTS STATE
  const [book, setBook] = useState<IBookProps>({
    title: '',
    author: '',
    isbn: '',
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

  return (
    <BookProvider>
      <div className="App">
        <Inputs />
        <BookItems />
      </div>
    </BookProvider>
  );
}

export default App;
