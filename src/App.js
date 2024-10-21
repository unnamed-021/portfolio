import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyles from "./styles/globalStyles";
import HomePage from "./screens/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as SuccessIcon } from "./assets/icons/success.svg";
import { ReactComponent as ErrorIcon } from "./assets/icons/error.svg";
import { ReactComponent as InfoIcon } from "./assets/icons/info-icon.svg";
import { ReactComponent as WarningIcon } from "./assets/icons/warning.svg";
import {
  Close,
  CloseContainer,
  IconContainer,
  StyledToastContainer,
} from "./App.styles";

function App() {
  // const [minimumDurationPassed, setMinimumDurationPassed] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setMinimumDurationPassed(true), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Fragment>
      <GlobalStyles />
      {/* {minimumDurationPassed ? ( */}
      <>
        <StyledToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          closeButton={({ closeToast }) => (
            <CloseContainer>
              <Close onClick={closeToast} />
            </CloseContainer>
          )}
          icon={({ closeToast, type }) => (
            <IconContainer type={type}>
              {type === "success" && <SuccessIcon onClick={closeToast} />}
              {type === "error" && <ErrorIcon onClick={closeToast} />}
              {type === "warning" && <WarningIcon onClick={closeToast} />}
              {type === "info" && <InfoIcon onClick={closeToast} />}
            </IconContainer>
          )}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
      {/* ) : ( <SplashScreen />
      )} */}
    </Fragment>
  );
}

export default App;
