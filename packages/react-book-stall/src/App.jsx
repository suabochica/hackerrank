import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const handleAddBook = () => {
    if (!title.trim() || !author.trim()) return

    const book = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim()
    }

    setBooks([...books, book])
    setTitle('')
    setAuthor('')
  }

  const handleEditBook = (id) => {
    const book = books.find(b => b.id === id)

    if (book) {
      setTitle(book.title)
      setAuthor(book.author)
      setEditingId(book.id)
    }
  }

  const handleUpdateBook = () => {
    if (!title.trim() || !author.trim()) return

    setBooks(books.map(b =>
      b.id === editingId
        ? { ...b, title: title.trim(), author: author.trim() }
        : b
    ))

    setTitle('')
    setAuthor('')
    setEditingId(null)
  }

  const handleDeleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id))
  }

  return (
    <div>
      <h1>Book Stall</h1>
      <div>
        <input type='text' placeholder='Title' name='title' value={title} onChange={handleTitleChange} />
        <input type='text' placeholder='Author' name='author' value={author} onChange={handleAuthorChange} />
        {editingId
          ? (
            <button onClick={handleUpdateBook}>Update Book</button>
            )
          : (
            <button onClick={handleAddBook}>Add Book</button>
            )}
      </div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button data-testid='edit-button' onClick={() => handleEditBook(book.id)}>Edit</button>
            <button data-testid='delete-button' onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
