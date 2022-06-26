My Reads app

-- description
1- this app ia a SPA -> single page application made by using react.js.
2- by using my reads app, you can search for books and categorize them into three categories ( want to read, read and currently reading).
3- this app is consists of main page and search page.
4- the main page consists of three shelves and each shelf contains some books, and the page has an icon to direct to the search page.
5- the search page includes the search bar and icon to go to the main page.
6- books are displayed in both main page and search page (book title, book author and book cover image are displayed).

-- By this app yo can:
1- search for any particular book by its name in the search bar.
2- categorize each book by adding them on shelves in the main page.
3- relocate each book from one shelf to another.
4- you can categorize books and relocate them from both main page and search page.

-- techs:
1- this app used React.js liberary within the html (jsx), css and js.
2- I use the stateless functional components instead of class components.
3- updating the state happened using hooks.
4- I use useState, useEffect and useContext hooksto update and manage the state.
5- I used also the ready BooksAPI.js file with the starter code.
6- I use the react-router-dom to move between main page and search page by using Links, BrowserRouter, Routes and Route.
7- using localStorage let the data remain in the page with refresh the page.
8- in search page, 
  - when there no word added to search for there is a message displayed.
  - when searching resulting no result a specific message displayed.
  - when a book has no titlte or cover image or even author there is a message instead of title and author and a placeholder image instead of cover image are displayed.
  - when search query deleted the results are deleted as well.
