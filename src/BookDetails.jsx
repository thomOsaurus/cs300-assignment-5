import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function BookDetails() {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
              const selectedBook = data.find(
                (book) => book.id === id
              );
              setBook(selectedBook || null);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
        if (loading) {
            return <p role="status">Loading book...</p>;
        }

        if (error) {
            return <p role="alert">{error}</p>;
        }

        if (!book) {
            return (
                <section>
                    <h2>Book Not Found</h2>
                    <Link to="/books">Back to Books</Link>
                </section>
            );
        }
    return (
        <section>
            <h2>{book.title}</h2>

            <p>Creator: {book.creator}</p>
            <p>Category: {book.category}</p>
            <p>Minutes: {book.minutes}</p>
            <p>Description: {book.description}</p>

            <Link to="/books">Back to Books</Link>
        </section>
    );
}