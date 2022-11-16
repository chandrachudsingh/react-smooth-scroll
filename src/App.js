import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} element={<Home />} exact />
        <Route
          path="/signin"
          component={SigninPage}
          element={<SigninPage />}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;
