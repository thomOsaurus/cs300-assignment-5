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
        <Route path="/books" element={<h2>Browse Books</h2>} />
        <Route path="/search" element={<h2>Search Books</h2>} />
        <Route path="/books/:id" element={<h2>Book Details</h2>} />
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
   