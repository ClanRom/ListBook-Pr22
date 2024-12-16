import Button from '../../../shared/ui/button';

export default function PostBookList({ bookList, delBtn, readBook }) {
  return (
    <div className='PostBook'>
      <h2>Список Книг</h2>
      <ul>
        {bookList.map((book) => (
          <li className={book.id} onClick={() => readBook(book.id)}>
            <h3 style={{textDecorationLine: book.isRead ? 'line-through' : 'none'}}>{book.name}</h3>
            <div className='info-book'>
            <p>Автор: {book.avtor}</p>
            <p>Издатель:{book.publisher}</p>
            <p className='isRead'>Статус: {book.isRead ? "Прочитано" : "Не прочитано"}</p>
            </div>
            <Button
              textButton='Удалить'
              funcBatton={() => delBtn(book.id)}
              className="btn-remove"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
