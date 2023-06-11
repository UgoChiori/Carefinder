// HOSPITAL SEARCH RESULTS COMPONENT IN TYPESCRIPT

import React from "react";

// PROPS INTERFACE
interface Props {
  hospital: unknown;
  key: number;
  index: number;
  handleHospitalClick: (index: number) => void;
}

const HospitalSearchResults: React.FC<Props> = ({
  hospital,
  key,
  index,
  handleHospitalClick,
}) => {
  return (
    <div
      className="hospital-search-results"
      key={key}
      onClick={() => handleHospitalClick(index)}
    >
      <div className="hospital-search-results__name">{hospitals.name}</div>
      <div className="hospital-search-results__address">{hospitals.address}</div>
      
    </div>
  );

    
};

export default HospitalSearchResults;
