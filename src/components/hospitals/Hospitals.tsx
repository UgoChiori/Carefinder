import React, { useEffect, useState } from "react";
import HospitalSearchResults from "./HospitalSearchResults";
import axios from "axios";

// API KEYS
const _API_URL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals%20in%20Nigeria&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk";
const SEARCH_API =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals%20in%20Nigeria&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk";

// HOSPITALS SEARCH PAGE COMPONENT

function HospitalSearchPage() {
  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState("");

  // SEARCH FUNCTIONALITY AND API CALLS
  const changeSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // GET ALL HOSPITAL API CALLS
  const getAllHospitals = () => {
    try {
      axios.post('/api', {_API_URL}).then((response) => {
        console.log(response.data.results);
        setHospitals(response.data.results);
      })
    } catch (error) {
      console.log(error);
    }
  };

  // GET SEARCHED HOSPITALS API CALL
  const getSearchedHospitals = () => {
    try {
      axios.post('/search', {SEARCH_API}).then((response) => {
        console.log(response.data.results);
        setHospitals(response.data.results);
      })
    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT HOOK TO CALL API ON PAGE LOAD AND ON SEARCH

  useEffect(() => {
    setHospitals([]);
    if (search === "") {
      getAllHospitals();
    } else {
      getSearchedHospitals();
    }
  }, [search]);

  // SEARCH CONDITONAL STATEMENTS AND LOADING STATE

  return (
    <div className="border border-black max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input
        type="search"
        value={search}
        onChange={changeSearch}
        placeholder="Search for a hospital"
        className="border border-black w-full p-2 rounded-md"
      />

      <div className="hospitals-container">
        {hospitals.length > 0 ? (
          hospitals.map((hospital: object, index: number) => (
            <HospitalSearchResults
              hospital={hospital}
              key={index}
              index={index}
              handleHospitalClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
}
export default HospitalSearchPage;

// import { useState, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// // import usePlacesAutocomplete, {
// //   getGeocode,
// //   getLatLng,
// // } from "use-places-autocomplete";
// // import {
// //   Combobox,
// //   ComboboxInput,
// //   ComboboxPopover,
// //   ComboboxList,
// //   ComboboxOption,
// // } from "@reach/combobox";
// // import "@reach/combobox/styles.css";

// interface Location {
//   lat: number;
//   lng: number;
// }

// // interface PlacesAutocompleteProps {
// //   setSelected: (location: Location | null) => void;
// // }

// // const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

// export default function Places() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk",
//     // libraries,
//   });

//   if (!isLoaded) return <div>Loading...</div>;

//   return <Map />;
// }

// function Map() {
//   const center: Location = useMemo(
//     () => ({ lat: 37.7749, lng: -122.4194 }),
//     []
//   );

//   const [selected, setSelected] = useState<Location | null>(null);

//   return (
//     <>
//       {/* <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div> */}

//       <GoogleMap
//         zoom={10}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }: PlacesAutocompleteProps) => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       setSelected({ lat, lng });
//     } catch (error) {
//       console.log("Error retrieving location:", error);
//     }
// };

// return (
//   <Combobox onSelect={handleSelect}>
//     <ComboboxInput
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       disabled={!ready}
//       className="combobox-input"
//       placeholder="Search an address"
//     />
//     <ComboboxPopover>
//       <ComboboxList>
//         {status === "OK" &&
//           data.map(({ place_id, description }) => (
//             <ComboboxOption key={place_id} value={description} />
//           ))}
//       </ComboboxList>
//     </ComboboxPopover>
//   </Combobox>
// );
// };

// import { useState, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// export default function Places() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk",
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194}), []);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div>

//       <GoogleMap
//         zoom={10}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         {selected && <Marker position={selected} />}
//       </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };

// import { useMemo, useState } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// const Hospitals = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk",
//     libraries: ["places"],
//   });

//   if (!isLoaded) return "Loading...";
//   return <Map />;

//   function Map() {
//     const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194 }), []);
//     const [selected, setSelected] = useState(null);

//     return (
//       <>
//         <div className="places-container">
//           <PlacesAutocomplete setSelected={setSelected} />
//         </div>
//         <GoogleMap
//           mapContainerStyle={{ width: "100%", height: "400px" }}
//           zoom={14}
//           center={{ lat: 37.7749, lng: -122.4194 }}
//         >
//           {selected && <Marker position={selected} />}
//         </GoogleMap>
//       </>
//     );
//   }

//   const PlacesAutocomplete = ({ setSelected }) => {
//     const {
//         ready,
//         value,
//         setValue,
//         suggestions: { status, data },
//         clearSuggestions,
//     } = usePlacesAutocomplete();
//   };

//   return <Combobox>
//         <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} placeholder="Enter an address" />
//   </Combobox>
// };

// export default Hospitals;

// interface Place {
//   id: string;
//   geometry: {
//     location: {
//       lat: number;
//       lng: number;
//     };
//   };
// }

// const Hospitals: React.FC = () => {
//   const [places, setPlaces] = useState<Place[]>([]);
//   const [apiKey, setApiKey] = useState('');

//   useEffect(() => {
//     const fetchApiKey = async () => {
//       try {
//         const response = await fetch('/api/apiKey');
//         const data = await response.json();
//         setApiKey(data.apiKey);
//       } catch (error) {
//         // console.log(error);
//       }
//     };

//     fetchApiKey();
//   }, []);

//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         const response = await fetch('/api/places');
//         const data = await response.json();
//         setPlaces(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (apiKey) {
//       fetchPlaces();
//     }
//   }, [apiKey]);

//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//   <GoogleMap
//     mapContainerStyle={{ width: '100%', height: '400px' }}
//     zoom={14}
//     center={{ lat: 37.7749, lng: -122.4194 }}
//   >
//     {places.map((place) => (
//       <Marker
//         key={place.id}
//         position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }}
//       />
//     ))}
//   </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Hospitals;

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// interface Place {
//   id: string;
//   geometry: {
//     location: {
//       lat: number;
//       lng: number;
//     };
//   };
// }

// const Hospitals: React.FC = () => {
//   const [places, setPlaces] = useState<Place[]>([]);
//   const [apiKey, setApiKey] = useState('');

//   useEffect(() => {
//     const fetchApiKey = async () => {
//       try {
//         const response = await fetch('/api/apiKey'); // Endpoint to retrieve the API key from the server
//         const data = await response.json();
//         setApiKey(data.apiKey);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchApiKey();
//   }, []);

//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         const response = await fetch('/api/places'); // Assuming the Node.js server is running on the same host/port
//         const data = await response.json();
//         setPlaces(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (apiKey) {
//       fetchPlaces();
//     }
//   }, [apiKey]);

//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//         zoom={14}
//         center={{ lat: 37.7749, lng: -122.4194 }}
//       >
//         {places.map((place) => (
//           <Marker
//             key={place.id}
//             position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Hospitals;

// front end one

// const containerStyle: React.CSSProperties = {
//   width: '100%',
//   height: '400px',
// };

// interface Place {
//   id: string;
//   geometry: {
//     location: {
//       lat: number;
//       lng: number;
//     };
//   };
// }

// const Hospitals: React.FC = () => {
//   const [places, setPlaces] = useState<Place[]>([]);

//   useEffect(() => {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals%20in%20Nigeria&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;
//     const url = proxyUrl + apiUrl;

//     fetch(apiUrl
// //       , {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Access-Control-Allow-Origin': '*', // Required for CORS support to work
// //         'Accept':'application/json',
// //         'X-API-KEY': 'AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk'
// //       }
// // }
// )

//      .then((response) =>
//      {

//      response.text()
//      const ugo = response.text()

//     })

//       .then((data) => {

//       const jsonData = JSON.parse(data);

//         setPlaces(jsonData.results);
//       })
//       .catch((error) => {

//         console.log(error);
//       });
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={14}
//         center={{ lat: 37.7749, lng: -122.4194 }}
//       >
//         {places.map((place) => (
//           <Marker
//             key={place.id}
//             position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Hospitals;

// import { useState, useEffect, Component } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle:React.CSSProperties = {
//   width: "100%",
//   height: "100%",
// };

// interface Place {
//   id: string;
//   geometry: {
//     location: {
//       lat: () => number;
//       lng: () => number;
//     };
//   };
// }

// interface State {
//   places: Place[];
// }

// class Hospitals extends Component<object, State> {
//   state: State = {
//     places: [],
//   };

//   componentDidMount() {
//     const apiKey = 'AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk';
//     const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals%20in%20Nigeria&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;
//     fetch(url).then((response) => {
//       response.json().then((data) => {
//         this.setState({ places: data.results
//         })
//         .catch((error: any) => {
//           console.log(error);
//         });
//       });
//     });
//   }

//   render() {
//     return (
//       <LoadScript googleMapsApiKey="AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={{ lat: 28.7041, lng: 77.1025 }}
//           zoom={10}
//         >
//           {this.state.places.map((place) => (
//             <Marker
//               key={place.id}
//               position={{
//                 lat: place.geometry.location.lat(),
//                 lng: place.geometry.location.lng(),
//               }}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     );
//   }

// }

// export default Hospitals;

// import { useState, useEffect } from "react";
// import { firestore } from "../Firebase";
// import {
//   collection,
//   query,
//   onSnapshot,
//   DocumentData,
// } from "firebase/firestore";
// import HospitalCard from "./HospitalCard";
// import "./hospitals.css";
// import { AiOutlineSearch } from "react-icons/ai";
// // import EditorComponent from "../EditorComponent";
// // import MarkdownEditor from "../EditorComponent";

// interface Hospital {
//   id: string;
//   title: string;
//   desc: string;
// }

// function Hospitals() {
//   const [hospitals, setHospitals] = useState<Hospital[]>([]);
//   const [loading, setLoading] = useState(false);

//   const hospitalsCollection = collection(firestore, "Hospitals");
//   const hospitalsQuery = query(hospitalsCollection);

//   function getHospitals() {
//     setLoading(true);

//     const unsubscribe = onSnapshot(hospitalsQuery, (snapshot) => {
//       const items: Hospital[] = [];
//       snapshot.forEach((doc) => {
//         const data = doc.data() as DocumentData;

//         const hospital: Hospital = {
//           id: doc.id,
//           title: data.title,
//           desc: data.desc,
//         };

//         items.push(hospital);
//       });

//       setHospitals(items);

//       setLoading(false);
//     });

//     return unsubscribe;
//   }

//   useEffect(() => {
//     const unsubscribe = getHospitals();

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <h1 className="loading">Loading...</h1>;
//   }

//   // const handleEditorChange = (content: string) => {
//   //   console.log("content: ", content);
//   // };

//   return (
//     <>
//     <div className="special_container">
//     <div className="careheader_container">
//       <div className="careheader_wrapper">
//         <div className="careheader_head">
//           <h1 className="careheader_heading">
//            Find Hospitals <span className="careheader_heading_span">Near</span>{" "}
//             You
//           </h1>
//           <p className="heading_para">Hospitals</p>
//           <div className="careheader_input">
//             <AiOutlineSearch className="careheader_input_icon" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="careheader_input_element" />
//           </div>
//         </div>

//       </div>
//     </div>
//     </div>
//     <div>
//         {hospitals.map((hospital) => (
//           <HospitalCard
//             key={hospital.id}
//             name={hospital.title}
//             address={hospital.desc}
//             desc={""} />
//         ))}
//       </div></>
//   );
// }

// export default Hospitals;

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
