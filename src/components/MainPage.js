import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import Shelf from './Shelf'

const MainPage = () => {

  const {bookList} = useContext(Context)
  
  return (
    <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelfTitle='Currently Reading' books={bookList} shelf='currentlyReading'/>
          <Shelf shelfTitle='Want To Read' books={bookList} shelf='wantToRead'/>
          <Shelf shelfTitle='Read' books={bookList} shelf='read'/>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  </div>
  )
}

export default MainPage