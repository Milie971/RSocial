export function Tweet({ id, name, content, like, onDelete, onLike }) {
  const onLike = () => {
    console.log("Like", name);
  };

  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="delete">
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => onLike(id)}>{like} ❤️ </button>
    </div>
  );
}
