import "./careheader.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";
import { FaHospitalUser } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

type Props = {};

const CareHeader = (props: Props) => {
  return (
    <div className="careheader_container">
      <div className="careheader_wrapper">
        <div className="careheader_head">
          <h1 className="careheader_heading">
            Search Your <span className="careheader_heading_span">Care</span>{" "}
            Provider
          </h1>
          <p className="heading_para">Lorem ipsum dolor</p>
          <div className="careheader_input">
            <AiOutlineSearch className="careheader_input_icon" />
            <input
              type="text"
              placeholder="Search"
              className="careheader_input_element"
            />
          </div>
        </div>
        <div className="careheader_select">
          <div className="careheader_item">
            <FaHospitalUser className="careheader_select_icon" />
            <p>Add Hospital</p>
          </div>

          <div className="careheader_item">
            <MdOutlineTipsAndUpdates className="careheader_select_icon" />
            <p>Health Tips</p>
          </div>
          <div className="careheader_item">
            <GiDoctorFace className="careheader_select_icon" />
            <p>Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareHeader;
