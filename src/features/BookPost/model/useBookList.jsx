import { useEffect, useState } from "react";

export function UseBookList() {
  const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem("bookList")) || []);
  const [bookId, setBookId] = useState(bookList.length > 0 ? bookList[bookList.length - 1].id + 1 : 0);
    
  useEffect(() => {
    localStorage.setItem("bookList", JSON.stringify(bookList))
  }, [bookList])

  const addBook = (book) => {
      for (let key in book){
        if (book[key] === '') return;
      }

      setBookList(prev => [...prev, {...book, id: bookId}]);
      setBookId(prev => prev + 1)
  }

  const removeBook = (idBook) => {
    setBookList(prev => prev.filter(book => book.id !== idBook))
  }

  const readBook = (idBook) => {
    setBookList(prev => prev.map(book => book.id === idBook ? {...book, isRead: !book.isRead} : book))
  }

  const sortListBook = () => {
    setBookList(prev => [...prev].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    }))
  }

  return { bookList, addBook, removeBook, readBook, sortListBook };
}
