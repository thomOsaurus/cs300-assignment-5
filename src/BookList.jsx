import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch(`${import.meta.env.BASE_URL}data/books.json`)  
       .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load books");
        }
        return response.json();
       })
       .then((data) => {
          setBooks(data);
       })
       .catch((err) => {
        setError(err.message);
       })
       .finally(() => {
        setLoading(false);
       });
    }, []);

    if(loading) {
       return <p role="status">Loading books...</p>;
    }
    if (error) {
       return <p role="alert">{error}</p>; 
    }
    if (books.length === 0) {
       return <p>No books found.</p>;
    }


    return (
     <section>
        <h2>Browse Books</h2>

        <ul>
          {books.map((book) => (
            <li key={book.id}>
             <Link to={`/books/${book.id}`}>
               {book.title}
             </Link>
             <p>Creator: {book.creator}</p>
             <p>Category: {book.category}</p>
            </li>
        ))}    
        </ul>
     </section>    
    );
}