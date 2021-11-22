import React, { useState } from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const [toursData, setToursData] = useState(props.data);

  const hideTour = (data) => {
    const newToursData = toursData.filter((el) => {
      return el.id !== data;
    });

    setToursData(newToursData);
  };

  if (toursData.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>No tours left</h2>
          <button
            className="btn"
            onClick={() => {
              setToursData(props.data);
            }}
          >
            Refresh
          </button>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {toursData.map((tour) => {
        const { id, image, info, name, price } = tour;
        return (
          <Tour
            key={id}
            id={id}
            image={image}
            info={info}
            name={name}
            price={price}
            hideTour={hideTour}
          />
        );
      })}
    </section>
  );
};

export default Tours;
