import React from "react";

export const ResidentInfo = ({residentData}) => {
  return (
    <section className="character">
      <div className="character-header">
        <div className="state">
          <span className={residentData.status}></span>
          <h4>{residentData.status}</h4>
        </div>
      </div>

      <div className="character-body">
        <figure>
          <img src={residentData.image} alt={residentData.name} />
        </figure>

        <h2>{residentData.name}</h2>
        <p>
          {residentData.species} <span>-</span> {residentData.gender}
        </p>
      </div>
    </section>
  );
};

export default ResidentInfo;
