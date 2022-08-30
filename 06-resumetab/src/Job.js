const Job = ({ job }) => {
  console.log(job);
  const { title, company, dates, duties } = job;
  return (
    <article>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{dates}}</p>
      {duties.map((duty, index) => (
        <p key={index}> + {duty}</p>
      ))}
    </article>
  );
};

export default Job;
