import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, rmTour }) => {
  return (
    <section>
      <div className="title">
        <h2>
          our Tours
          <div className="title-underline"></div>
          <div className="tours">
            {tours.map((tour) => {
              return (
                <div>
                  <Tour key={tour.id} {...tour} rmTour={rmTour} />
                </div>
              );
            })}
          </div>
        </h2>
      </div>
    </section>
  );
};

export default Tours;
