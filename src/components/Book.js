import { useContext , useState , useEffect} from "react"
import { Context } from "../Context"

const Book = ({book} ) => {
  const {changeShelf} = useContext(Context)
  const {imageLinks, authors , title} = book
  const [isSelected , setIsSelected] = useState(false)

  const updateShelf = e => {
    changeShelf(book , e.target.value)
      setIsSelected(true)
    
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
          <select onChange={updateShelf} defaultValue='none'>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="none" style={{background: !isSelected ? 'red' : 'transparent'}} >None</option>
            <option value="currentlyReading" style={{background: isSelected ? 'red' : 'transparent'}}>
              Currently Reading
            </option>
            <option value="wantToRead"  style={{background: isSelected ? 'red' : 'transparent'}}>Want to Read</option>
            <option value="read"  style={{background: isSelected ? 'red' : 'transparent'}}>Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title ? title : "No title"}</div>
      <div className="book-authors">{authors ? authors : 'No author Known'}</div>
    </div>
  )
}

export default Book