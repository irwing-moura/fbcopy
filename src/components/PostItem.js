import React from "react";

function PostItem({author, date, content, comments }) {
    return (
      <section className="timeline">
        <div className="cards">
          <ul className="post">
            <li>
              <img src={author.avatar} alt="" />
              <div className="info">
                <strong>{author.name}</strong>
                <small>{date}</small>
                <p>{content}</p>
              </div>
            </li>
          </ul>
            {comments.map(comment => (
          <ul className="comments" key={comment.id}>
            <li>
              <img src={comment.author.avatar} alt="fotoPerfil" />
              <div className="comentario">
                <p>
                  <strong>{comment.author.name}</strong>{comment.content}
                </p>
              </div>
            </li>
          </ul>
            ))}
        </div>
      </section>
    );
  
}

export default PostItem;
