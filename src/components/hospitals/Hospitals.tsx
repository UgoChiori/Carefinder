import { useState, useEffect } from "react";
import { firestore } from "../Firebase";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import HospitalCard from "./HospitalCard";
import "./hospitals.css";
import { AiOutlineSearch } from "react-icons/ai";
// import EditorComponent from "../EditorComponent";
// import MarkdownEditor from "../EditorComponent";

interface Hospital {
  id: string;
  title: string;
  desc: string;
}

function Hospitals() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);

  const hospitalsCollection = collection(firestore, "Hospitals");
  const hospitalsQuery = query(hospitalsCollection);

  function getHospitals() {
    setLoading(true);

    const unsubscribe = onSnapshot(hospitalsQuery, (snapshot) => {
      const items: Hospital[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;

        const hospital: Hospital = {
          id: doc.id,
          title: data.title,
          desc: data.desc,
        };

        items.push(hospital);
      });

      setHospitals(items);

      setLoading(false);
    });

    return unsubscribe;
  }

  useEffect(() => {
    const unsubscribe = getHospitals();

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  // const handleEditorChange = (content: string) => {
  //   console.log("content: ", content);
  // };

  return (
    <>
    <div className="special_container">
    <div className="careheader_container">
      <div className="careheader_wrapper">
        <div className="careheader_head">
          <h1 className="careheader_heading">
           Find Hospitals <span className="careheader_heading_span">Near</span>{" "}
            You
          </h1>
          <p className="heading_para">Hospitals</p>
          <div className="careheader_input">
            <AiOutlineSearch className="careheader_input_icon" />
            <input
              type="text"
              placeholder="Search"
              className="careheader_input_element" />
          </div>
        </div>
       
      </div>
    </div>
    </div>
    <div>
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            name={hospital.title}
            address={hospital.desc}
            desc={""} />
        ))}
      </div></>
  );
}

export default Hospitals;

// import { useState } from "react";
// import "./hospitals.css";

// type Props = {};

// const Hospitals = () => {
//   const [hospitals, setHospitals] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   return (
//     <div>
//       <div className="hospital_container">
//         <div className="hospital_wrap">
//           <div className="header_heading">
//             <p className="hospital_parag">Hospitals</p>
//             <h1 className="hospital_heading">Find hospitals near you</h1>
//           </div>
//           <div className="hospital_grid">
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>

//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>
//             <div className="hospital_card">
//               <div className="hospital_overlay">
//                 <h2>Hospital </h2>
//                 <button className="hospital_button">Details</button>
//               </div>
//               <div className="hospital_icon">{"icon"}</div>
//               <div className="hospital_details">
//                 <h2>Hospital Name</h2>
//                 <p>Hospital Address</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default Hospitals;
