import "./hospitals.css"

type Props = {
  name: string;
  address: string;
  desc: string;
};

const HospitalCard = (props: Props) => {
  return (
    //Search Bar

    <div className="hospital_cover">
      <div className="hospital_container">
        <div className="hospital_wrap">
          <div className="hospital_grid">
            <div className="hospital_card">
              <div className="hospital_overlay">
                <h2>Hospital </h2>
                <button className="hospital_button">Details</button>
              </div>
              <div className="hospital_icon">{"icon"}</div>
              <div className="hospital_details">
                <h2>{props.name}</h2>
                <p>{props.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;


  /* <div className="hospital_container">
        <div className="hospital_wrap">
          <div className="header_heading">
            <p className="hospital_parag">Hospitals</p>
            <h1 className="hospital_heading">Find hospitals near you</h1>
          </div>

          <div className="hospital_grid">
            <div className="hospital_card">
              <div className="hospital_overlay">
                <h2>Hospital </h2>
                <button className="hospital_button">Details</button>
              </div>
              <div className="hospital_icon">{'icon'}</div>
              <div className="hospital_details">
                <h2>{props.name}</h2>
                <p>{props.address}</p>
                <p>{props.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */

