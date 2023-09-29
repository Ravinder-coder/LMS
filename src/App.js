import "./App.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CbcReportForm from "./form/CbcReportForm";
import CbcReport from "./pdf/CbcReport";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CbcReportForm />} />
          <Route path="/report" element={<CbcReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
