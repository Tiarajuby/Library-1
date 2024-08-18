import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-41.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container my-4">
      <BackButton />
      <h1 className="mb-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card p-4">
          <div className="mb-3">
            <strong>ID: </strong>{book._id}
          </div>
          <div className="mb-3">
            <strong>Title: </strong>{book.title}
          </div>
          <div className="mb-3">
            <strong>Author: </strong>{book.author}
          </div>
          <div className="mb-3">
            <strong>Publish Year: </strong>{book.publishYear}
          </div>
          <div className="mb-3">
            <strong>Created At: </strong>{new Date(book.createdAt).toLocaleString()}
          </div>
          <div className="mb-3">
            <strong>Last Updated At: </strong>{new Date(book.updatedAt).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
