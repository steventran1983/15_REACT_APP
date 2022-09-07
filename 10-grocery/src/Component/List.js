const List = ({ items, handleDelete, handleEdit }) => {
  return (
    <>
      {items.map((item, index) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p>{title}</p>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default List;
