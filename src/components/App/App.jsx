import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
  }, [])

  // TODO - GET Book List from server
  const fetchBooks = () => {
    axios.get('/books').then((response) =>{
      console.log(response.data)
      dispatch({
        type: 'SET_BOOKS',
        payload: response.data
      })
    }).catch((error) => {
      console.log(error);
    });
  }



  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBooks={fetchBooks} />
        <BookList />
      </main>
    </div>
  );
}

export default App;