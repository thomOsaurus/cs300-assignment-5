import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    
    useEffect(() => {
        let ignore = false;

        setLoading(true);
        setError(null);
      fetch(`${import.meta.env.BASE_URL}data/books.json`)  
       .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load books");
        }
        return response.json();
       })
       .then((data) => {
         if (!ignore) {
          setBooks(data);
         } 
       })
       .catch((err) => {
          if (!ignore) {
            setError(err.message);
        }
       })
       .finally(() => {
          if (!ignore) {
        setLoading(false);
          }
       });

       return () => {
        ignore = true;
       };
    }, [retryCount]);

    if(loading) {
       return <p role="status">Loading books...</p>;
    }
    if (error) {
       return (
        <section>
            <p role="alert">{error}</p>
            <button
               onClick={() => setRetryCount(count => count + 1)}
            >
                Retry
                </button>
            </section>
       );    
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