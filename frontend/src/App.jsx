import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLogin from "./Landing/CustomerLoginPage.jsx";
import Register from "./Landing/CustomerRegister.jsx";
import LandPage from './Landing/LandPage.jsx';
import AdminLoginPage from './Landing/AdminLoginPage';
import GeneralManagement from './generalManagement/Dashboard.jsx';
import Inventory from './InventoryStocks/Dashboard.jsx'
import CustomerOrder from './customerOrder/Dashboard.jsx';
import Finance from './financeManagement/Dashboard.jsx';
import HumanResources from './humanResource/Dashboard.jsx';
import Manufacturing from './manufacturing/Dashboard.jsx';
import QualityAssurance from './qualityAssurance/Dashboard.jsx';
import Sales from './salesManagement/Dashboard.jsx';
import TrainingSimulation from './trainingSimulation/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/admin-login" element={<AdminLoginPage/>}/>
        <Route path="/customer-login" element={<CustomerLogin/>}/>    
        <Route path="/customer-register" element={<Register/>}/>
        <Route path="/general-management" element={<GeneralManagement />} />
        <Route path="/inventory-management" element={<Inventory />} />
        <Route path="/customer-order" element={<CustomerOrder />} />
        <Route path="/finance-management" element={<Finance />} />
        <Route path="/hr-management" element={<Inventory />} />
        <Route path="/inventory-management" element={<HumanResources />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/sales-management" element={<Sales />} />
        <Route path="/training-simulation" element={<TrainingSimulation />} />
      </Routes>
    </Router>
  );
}

export default App;
