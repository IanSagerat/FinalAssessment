import React, { useState, useEffect } from "react";

export default function SearchFilter({ books, setBooks }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setBooks(books);
      return;
    }

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(filteredBooks);
  }, [search, books, setBooks]);

  const inputStyle = {
    marginTop: "20px",
    width: "290px",
    height: "35px",
    fontSize: "18px",
    paddingLeft: "8px",
    borderRadius: "3px",
    outline: "none",
  };

  const divStyle = {
    position: "absolute",
    right: "440px",
  };

  return (
    <div style={divStyle}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Search by Title..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
