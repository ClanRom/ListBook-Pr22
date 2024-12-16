import PostBookList from "../../features/BookPost/ui/PostBookList";
import FormAddBook from "../../features/BookPost/ui/FormAddBook";
import { useState, useEffect } from "react";
import { UseBookList } from "../../features/BookPost/model/useBookList";
import ButtonSort from "../../features/BookPost/ui/ButtonSort";
import './index.css'

export default function BookList() {
  const [book, setBook] = useState({ name: "", avtor: "", publisher: "", id: 0, isRead: false });
  const { bookList, addBook, removeBook, readBook, sortListBook } = UseBookList();

  return (
    <div className="pages-BookList">
      <FormAddBook book={book} setBook={setBook} funcBtn={addBook} />
      <ButtonSort
      sortList={sortListBook}
      />
      <PostBookList bookList={bookList} delBtn={removeBook} readBook={readBook}/>
    </div>
  );
}
