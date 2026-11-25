import BookList from "./BookList.jsx";
import BookDetails from "./BookDetails.jsx";
import BookSearch from "./BookSearch.jsx"
import { Routes, Route, Link, Navigate } from "react-router";
import "./styles.css";

export default function App() {
  return (
    <main>
      <h1>Book Catalog</h1>
      
      <nav>
        <Link to="/books">Browse Books</Link>
        {" | "}
        <Link to="/search">Search Books</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="*" element={
          <div>
            <h2>Page Not Found</h2>
            <Link to="/books">Back to Books</Link>
          </div>
        } />
      </Routes>
     </main>
  );
}   
   