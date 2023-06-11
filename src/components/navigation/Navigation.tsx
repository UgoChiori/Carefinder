import { useEffect, useState } from "react";
import "./navigation.css";
import { CgDetailsMore } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { Link, useLocation} from "react-router-dom";



const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [offset] = WindowOffSet();
const location = useLocation();

console.log(location.pathname);
  

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={offset > 20 ? "nav_container1" : "nav_container"}>
      <div className="nav_wrapper">
        <h1>Carefinder.</h1>
        <div className={`nav_ul ${open ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/hospitals" onClick={handleLinkClick}>
                Hospitals
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={handleLinkClick}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/signin" onClick={handleLinkClick}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_icons">
          {open ? (
            <ImCancelCircle
              className="nav_icon"
              onClick={() => setOpen(false)}
            />
          ) : (
            <CgDetailsMore className="nav_icon" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

function WindowOffSet() {
  const [offset, setOffSet] = useState<number>(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffSet(window.scrollY);
    };
  }, []);

  return [offset] as const;
}


// import { useEffect, useState } from "react";
// import "./navigation.css";
// import { CgDetailsMore } from "react-icons/cg";
// import { ImCancelCircle } from "react-icons/im";
// import { Link } from "react-router-dom";

// // import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";

// const Navigation = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   const [offset] = WindowOffSet();

//   return (
//     <nav className={offset > 20 ? "nav_container1" : "nav_container"}>
//       <div className="nav_wrapper">
//         <h1>Carefinder.</h1>
//         <div className={`nav_ul ${open ? "active" : ""} `}>
          
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/hospitals">Hospitals</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="nav_icons">
//           {open ? (
//             <ImCancelCircle
//               className="nav_icon"
//               onClick={() => setOpen(false)}
//             />
//           ) : (
//             <CgDetailsMore className="nav_icon" onClick={() => setOpen(true)} />
//           )}
//         </div>
//       </div>
     
//     </nav>
//   );
// };

// export default Navigation;

// function WindowOffSet() {
//   const [offset, setOffSet] = useState<number>(0);

//   useEffect(() => {
//     window.onscroll = () => {
//       setOffSet(window.scrollY);
//     };
//   }, []);

//   return [offset] as const;
// }
