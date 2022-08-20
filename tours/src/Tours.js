import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  // console.log(tours);
  return (
    <section>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
}

export default Tours;
