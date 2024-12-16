import Input from "../../../shared/ui/input";

export default function FormAddBook({ book, setBook, funcBtn }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      funcBtn(book);
      }}>
      <Input
        type="text"
        value={book.name}
        placeholder="Название книги"
        onChange={(prev) => setBook({...book, name: prev.target.value})}
      />

      <Input type="text" value={book.avtor} placeholder="Автор книги" onChange={(prev) => setBook({...book, avtor: prev.target.value})} />

      <Input type="text" value={book.placeholder} placeholder="Издатель" onChange={(prev) => setBook({...book, publisher: prev.target.value})} />

      <button type="submit" className="addBtn">Добавить</button>
    </form>
  );
}
