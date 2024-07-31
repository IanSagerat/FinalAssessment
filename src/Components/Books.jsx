import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";

const initialBooks = [
  {
    index: "1",
    title: "A Song of Ice and Fire",
    author: "John",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
  {
    index: "2",
    title: "A Game of Thrones",
    author: "Jane",
    dueDate: "31/08/2024",
    status: "Available",
  },
  {
    index: "3",
    title: "A Feast for Crows",
    author: "Mike",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
  {
    index: "4",
    title: "The Winds of Winter",
    author: "Lisa",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
  {
    index: "5",
    title: "A Dance With Dragons: Dream and Dust",
    author: "John",
    dueDate: "31/08/2024",
    status: "Available",
  },
  {
    index: "6",
    title: "The Princess and the Queen",
    author: "Jane",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
  {
    index: "7",
    title: "The Son of the Dragon",
    author: "Mike",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
  {
    index: "8",
    title: "The Lands of Ice and Fire",
    author: "Lisa",
    dueDate: "31/08/2024",
    status: "Available",
  },
  {
    index: "9",
    title: "The Book of Swords",
    author: "Ian",
    dueDate: "31/08/2024",
    status: "Available",
  },
  {
    index: "10",
    title: "The Rise of the Dragon",
    author: "Julliah",
    dueDate: "31/08/2024",
    status: "Checked Out",
  },
];

export default function Books() {
  const [books, setBooks] = useState(initialBooks);

  const h1style = {
    fontSize: "30px",
    fontFamily: "Arial",
    textAlign: "center",
    marginBottom: "20px",
  };

  const listContainerStyle = {
    marginTop: "80px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const columnStyle = {
    width: "48%",
    boxSizing: "border-box",
  };

  const margin = {
    marginLeft: "25%",
    marginRight: "25%",
    paddingLeft: "55px",
    paddingRight: "55px",
  };

  return (
    <div style={margin}>
      <h1 style={h1style}>Library Catalog</h1>
      <SearchFilter books={initialBooks} setBooks={setBooks} />
      <div style={listContainerStyle}>
        {books.map((book, index) => (
          <div key={index} style={columnStyle}>
            <Book
              index={book.index}
              title={book.title}
              author={book.author}
              dueDate={book.dueDate}
              status={book.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
