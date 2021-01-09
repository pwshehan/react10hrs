import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { data } from "./books";

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

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        Click Here
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
