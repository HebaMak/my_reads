import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../Context'
import Book from './Book';

const Search = () => {

  const {changeShelf , searchTerm , handleChange , emptyMessage , searchBookList} = useContext(Context)

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <a className="close-search"> Close </a>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        { emptyMessage &&  <h2>Please Enter a Book Name</h2>}
        <ol className="books-grid">
          {
            !searchBookList.error ? searchBookList.map(book =>  
              (
                <li key={book.id}>
                  <Book book={book} changeShelf={changeShelf}/>
                </li>
              )
            ) : <h2>No Book Found</h2>
          }
        </ol>
      </div>
    </div>
  )
}

export default Search