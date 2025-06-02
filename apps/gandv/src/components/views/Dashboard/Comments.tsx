import React, { useState } from 'react';
import '../../../styles/comments.css';

type Comment = {
  id: number;
  content: string;
};

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentContent, setCommentContent] = useState('');

  const handleAddComment = () => {
    if (commentContent.trim() === '') return;

    const newComment: Comment = {
      id: Date.now(),
      content: commentContent.trim(),
    };

    setComments([...comments, newComment]);
    setCommentContent('');
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-container">
      <h3>Comentarios</h3>
      <div className="add-comment-input">
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
        />
        <button onClick={handleAddComment}>Agregar Comentario</button>
      </div>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <p>{comment.content}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}