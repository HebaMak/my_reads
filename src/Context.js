import { useState , useEffect } from "react";
import { createContext } from "react";
import * as BooksAPI from './BooksAPI'

export const Context = createContext()

const ContextProvider = ({children}) => {

  const [bookList , setBookList] = useState([])
  const [searchBookList , setSearchBookList] = useState([])
  const [searchTerm , setSearchTerm] = useState('')
  const [emptyMessage , setEmptyMessage] = useState(true)
  

  const handleChange = e => {
    setSearchTerm(e.target.value)
  } 

  useEffect(() => {
    if(searchTerm.length > 0 ) {
      BooksAPI.search(searchTerm.trim() , 50).then(res => {
        setSearchBookList(res)
        setEmptyMessage(false)
      })
    } else {
      setSearchBookList([])
      setEmptyMessage(true)
    }
  },[searchTerm])

  useEffect(()=> {
    BooksAPI.getAll().then(res => {
      setBookList(res)
    })
  } , [])


  const changeShelf = async (book , shelf) => {
    await BooksAPI.update(book , shelf)
    await BooksAPI.getAll().then (res => {
      setBookList(res)
    })
  }
  

  const value = {
    changeShelf, 
    bookList,  
    handleChange, 
    searchTerm, 
    emptyMessage,
    searchBookList,   
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )

}

export default ContextProvider