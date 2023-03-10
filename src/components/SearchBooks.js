import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class SearchBooks extends Component {
  state = {
    searchedResults: [],
    query: "",
  };

  getSearchResult = (newQuery) => {
    const query = newQuery;
    this.setState({ query: newQuery });

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (!books || books.hasOwnProperty("error")) {
          this.setState({ searchedResults: [] });
        } else {
          books.map((book) => {
            book.shelf = "none";
            this.props.books.forEach((bk) => {
              book.title === bk.title && (book.shelf = bk.shelf);
            });
          });
          this.setState({ searchedResults: books });
        }
      });
    } else this.setState({ searchedResults: [] });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button
              className="close-search"
              onClick={() => this.setState({ showSearchPage: false })}
            >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.getSearchResult(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchedResults &&
            this.state.searchedResults.length > 0 && (
              <BookShelf
                shelfTitle="Search Results"
                books={this.state.searchedResults}
                changeBookShelf={this.props.changeBookShelf}
              />
            )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
