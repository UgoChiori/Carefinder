// HOSPITAL SEARCH RESULTS COMPONENT IN TYPESCRIPT

import React from "react";

// PROPS INTERFACE
interface Props {
  hospital: Record<string, any>;
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
      <div className="hospital-search-results__name">{hospital.name}</div>
      <div className="hospital-search-results__address">{hospital.formatted_address}</div>
    </div>
  );

    
};

export default HospitalSearchResults;
