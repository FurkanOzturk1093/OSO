import { Route, Routes } from "react-router-dom";
import Datatable from "./components/Audience/Datatable";
import Sidebar from "./components/Sidebar/Sidebar";
import EmptyRoute from "./components/EmptyRoute/EmptyRoute";
import Header from "./components/Header/Header";
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
      <div className="container">
        <Header />
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
