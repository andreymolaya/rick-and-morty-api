import React, { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";
import ResidentsContainer from "./ResidentContainer";
import {getGeneralInfo} from "../services/api";

export default function LocationContainer({ inputData }) {
  const [locationInfo, setLocationInfo] = useState(false);
  const [residentsInfo, setResidentsInfo] = useState([]);

  useEffect(() => {
    if (inputData) {
      let promise = getGeneralInfo(inputData);

      promise.then((response) => {
        setLocationInfo(response.data);
        setResidentsInfo(response.data.residents);
      });
    }
  }, [inputData, locationInfo, residentsInfo]);

  return (
    <div className="loc-container">
      {locationInfo && <LocationInfo locationData={locationInfo} />}

      <div className="chac-container">
      {residentsInfo.map((elementUrl) => (
        <ResidentsContainer
          key={
            elementUrl.split("https://rickandmortyapi.com/api/character/")[1]
          }
          dataUrl={elementUrl}
        />
      ))}
      </div>
    </div>
  );
}
