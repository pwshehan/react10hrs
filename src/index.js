import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Setup vars
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
