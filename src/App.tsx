import CareHeader from "./components/carefinder/CareHeader";
import Hospitals from "./components/hospitals/Hospitals";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Register";
import Signin from "./components/LogIn";
import "./index.css";
// import PrivateRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navigation />
      <Container
        className="d-flex align-items-center
     justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<CareHeader />} />
              {/* <Route element={<PrivateRoute />}> */}
                <Route path="/hospitals" element={<Hospitals />} />
              {/* </Route> */}

              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </>
  );
};

export default App;
