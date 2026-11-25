import { useState, useEffect} from "react";
import { Link } from "react-router";

export default function BookSearch() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
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
    
    const filteredBooks = books.filter((book) => 
        book.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        book.creator.toLowerCase().includes(query.toLowerCase().trim())
);    
    return (
        <section>
            <h2>Search Books</h2>
        <label htmlFor="search">Search by title or creator:</label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search books..." 
          />

    {loading && <p role="status">Loading books...</p>}

    {error && <p role="alert">{error}</p>}    

    {!loading && !error && (
        <> 
           {filteredBooks.length === 0 ? (
             <p>No matching books found.</p>
           ) : (
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                      <Link to={`/books/${book.id}`}>
                        {book.title}
                      </Link>
                      <p>Creator: {book.creator}</p>
                      <p>Category: {book.category}</p>
                    </li>
                ))}
            </ul>
           )}   
        </>
    )}  
        </section>
    );
}