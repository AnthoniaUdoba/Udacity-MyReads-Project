import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ShelfChanger from "./components/ShelfChanger";
import { Route, Link, Routes } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  changeBookShelf = (book, value) => {
    BooksAPI.update(book, value).then(() => {
      BooksAPI.getAll().then((books) => this.setState({ books }));
    });
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <SearchBooks
                books={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <ShelfChanger
                    books={this.state.books}
                    changeBookShelf={this.changeBookShelf}
                  />
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
