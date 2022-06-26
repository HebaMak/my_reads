import { useContext } from 'react'
import { Context } from '../Context'
import Book from './Book'

const Shelf = ({shelfTitle , shelf }) => {

  const {bookList} = useContext(Context)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            bookList.filter(book => book.shelf === shelf).map(book => {
              return (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default Shelf