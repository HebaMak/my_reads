import { useContext} from "react"
import { Context } from "../Context"

const Book = ({book}) => {
  const {changeShelf} = useContext(Context)
  const {imageLinks, authors , title} = book

  const updateShelf = e => {
    changeShelf(book , e.target.value)
  }


  const bgImage = imageLinks && (imageLinks.smallThumbnail || imageLinks.thumbnail) ? 
                imageLinks.smallThumbnail : 
                '(https://via.placeholder.com/140x100)'
  
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bgImage}` 
            // backgroundImage: `url(${ imageLinks && (imageLinks.smallThumbnail || imageLinks.thumbnail) ? 
            //   (imageLinks.smallThumbnail) : 
            //   '(https://via.placeholder.com/140x100)'})`
          }} >
        </div>
        <div className="book-shelf-changer">
          <select onChange={updateShelf} defaultValue={book.shelf ? book.shelf : 'none'}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="none">None</option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title ? title : "No title"}</div>
      <div className="book-authors">{authors ? authors : 'No author Known'}</div>
    </div>
  )
}

export default Book