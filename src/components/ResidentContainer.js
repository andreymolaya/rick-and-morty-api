import React, { useEffect, useState } from 'react';
import ResidentInfo from "./ResidentInfo";
import {getResidentsInfo} from "../services/api";

export default function ResidentContainer ({dataUrl}) {
    let [resident, setResident] = useState("");


  useEffect( () => {     
        let promise = getResidentsInfo(dataUrl);
   
        promise.then((response) => {
            setResident(response.data)
        });
  }, [dataUrl])

    return (
        <div>
            {resident && <ResidentInfo residentData={resident} />}
        </div>
    )
}
