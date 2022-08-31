const Content = ({ paragraph }) => {
  console.log(`This is $$$$$$$ ${paragraph}`);
  return (
    <section>
      {paragraph.map((para, index) => {
        <p key={index}>{para}</p>;
      })}
    </section>
  );
};

export default Content;
