import { Route, Routes } from "react-router-dom";
import Datatable from "./components/Audience/Datatable";
import Sidebar from "./components/Sidebar/Sidebar";
import EmptyRoute from "./components/EmptyRoute/EmptyRoute";
function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/audience" element={<Datatable />} />
          <Route path="*" element={<EmptyRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
