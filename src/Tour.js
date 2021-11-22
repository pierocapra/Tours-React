import React, { useState } from "react";

const Tour = (props) => {
  const [textLenght, setTextLenght] = useState("short");

  const { id, image, info, name, price } = props;
  const shortInfo = info.slice(0, 200) + " ...";

  const clickTextHandler = () => {
    if (textLenght === "short") {
      setTextLenght("long");
    } else {
      setTextLenght("short");
    }
  };

  const clickHideTour = () => {
    props.hideTour(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {textLenght === "short" && (
          <p>
            {shortInfo} <span onClick={clickTextHandler}>Read More</span>
          </p>
        )}
        {textLenght === "long" && (
          <p>
            {info} <span onClick={clickTextHandler}>Show Less</span>
          </p>
        )}

        <button className=" delete-btn" onClick={clickHideTour}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
