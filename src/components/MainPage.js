// import { Link } from 'react-router-dom'
// import Shelf from './Shelf'

// const MainPage = () => {
  
//   return (
//     <div className="app">
//     <div className="list-books">
//       <div className="list-books-title">
//         <h1>MyReads</h1>
//       </div>
//       <div className="list-books-content">
//         <div>
//           <Shelf shelfTitle='Currently Reading' shelf='currentlyReading'/>
//           <Shelf shelfTitle='Want To Read' shelf='wantToRead'/>
//           <Shelf shelfTitle='Read' shelf='read'/>
//         </div>
//       </div>
//       <div className="open-search">
//         <Link to='/search'>Add a book</Link>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default MainPage



import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const MainPage = () => {
  
  
  return (
    <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelfTitle='Currently Reading' shelf='currentlyReading'/>
          <Shelf shelfTitle='Want To Read' shelf='wantToRead'/>
          <Shelf shelfTitle='Read' shelf='read'/>
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