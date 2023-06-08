import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Numbering = ({ startRating, set }) => {
  const [rating, setRating] = useState(startRating);

  function changeRating(newRating) {
    setRating(newRating);
    set(newRating);
  }
  return (
    <>
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={6}
        name="rating"
        starEmptyColor="#648f6f"
      />
    </>
  );
};

export default Numbering;
