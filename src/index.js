import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img:
      "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen and Sandie Sonke",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81LYYbsEPeL._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];

//Setup vars
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
