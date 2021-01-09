import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { data } from "./books";
import Book from "./Book";

//Setup vars
function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
