import React, { useState } from "react";

export default function Book({
  index,
  title,
  author,
  dueDate,
  status: initialStatus,
}) {
  const [status, setStatus] = useState(initialStatus);
  const [showDeadline, setShowDeadline] = useState(
    initialStatus !== "Available"
  );

  function setStat() {
    if (status === "Available") {
      setStatus("Checked Out");
      setShowDeadline(true);
    } else {
      setStatus("Available");
      setShowDeadline(false);
    }
  }

  const bookStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    borderRadius: "15px 0px 0px 15px",
    padding: "20px",
    borderBottom: "1px solid #ccc",
    fontSize: "18px",
    fontFamily: "Arial",
    backgroundColor: "#f2f2f2",
    margin: "15px 0",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  };

  const textStyle = {
    textAlign: "center",
  };

  return (
    <div style={bookStyle}>
      <span>No: {index}</span>
      <span style={textStyle}>Title: {title}</span>
      <span>Author: {author}</span>
      <span>Due Date: {showDeadline ? dueDate : "----"}</span>
      <span>Status: {status}</span>
      <span style={textStyle}>
        <button className="button" onClick={setStat}>
          Toggle Status
        </button>
      </span>
    </div>
  );
}
