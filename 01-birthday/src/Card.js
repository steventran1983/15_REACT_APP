function Card({ users }) {
  return (
    //   console.log("Thang Cong Tu")
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <img src={user.image} alt={user.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Card;
