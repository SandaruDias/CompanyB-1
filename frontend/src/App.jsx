import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralManagement from './generalManagement/Dashboard.jsx';
import Inventory from './InventoryStocks/Dashboard.jsx'
import CustomerOrder from './customerOrder/Dashboard.jsx';
import Finance from './financeManagement/Dashboard.jsx';
import HumanResources from './humanResource/Dashboard.jsx';
import Manufacturing from './manufacturing/Dashboard.jsx';
import QualityAssurance from './qualityAssurance/Dashboard.jsx';
import Sales from './salesManagement/Dashboard.jsx';
import TrainingSimulation from './trainingSimulation/components03/Dashboard.jsx';
import TrainingSimulationManagerPortal from './trainingSimulation/ManagerMain/managerDash.jsx';
import TrainingPage from "./trainingSimulation/components03/TrainingPage/TrainingPage.jsx";
import SimulationPage from "./trainingSimulation/components03/FileUploadform.jsx";
import PrototypePage from "./trainingSimulation/Customerprototype.jsx";
import UpdatePrototypeForm from "./trainingSimulation/ManagerMain/managerDash.jsx";
import TPSmanager from "./trainingSimulation/ManagerMain/main.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/general-management" element={<GeneralManagement />} />
        <Route path="/inventory-management" element={<Inventory />} />
        <Route path="/customer-order" element={<CustomerOrder />} />
        <Route path="/finance-management" element={<Finance />} />
        <Route path="/hr-management" element={<HumanResources />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/sales-management" element={<Sales />} />
        <Route path="/training-simulation" element={<TrainingSimulation />} />
        <Route path="/training-simulation/manager" element={<TPSmanager />} />
        <Route path="/training-simulation/training" element={<TrainingPage/>}/>
        <Route path="/training-simulation/simulations" element={<SimulationPage/>}/>
        <Route path="/training-simulation/manager/update/:id" component={UpdatePrototypeForm} />
        <Route path="/training-simulation/prototypes" element={<PrototypePage/>}/>
        <Route path="/training-simulation/managerportal" element={<TrainingSimulationManagerPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
