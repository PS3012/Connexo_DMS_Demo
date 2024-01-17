import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentPanel from './pages/DocumentPanel/DocumentPanel';
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem';
import Question from './pages/Question/Question';
import ChangeControlForm from './pages/ConfigForms/Changecontrolform';
import AddQuestion from './pages/AddQuestion/AddQuestion';
import ManageQuiz from './pages/ManageQuiz/ManageQuiz';
import RiskAssesment from './pages/ConfigForms/RiskAssesment';
import ManagementReview from './pages/ConfigForms/ManagementReview';
import InternalAudit from './pages/ConfigForms/InternalAudit'
import ExternalAudit from './pages/ConfigForms/ExternalAudit'
import Desktop from './pages/Desktop/Desktop';
import DivisionModal from './components/Modals/ProjectDivisionModal/DivisionModal';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/popup' element={<DivisionModal />} />
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/addQuestion' element={<AddQuestion />} />
          <Route path='/manageQuiz' element={<ManageQuiz />} />
          <Route path='/risk-assesment' element={<RiskAssesment />} />
          <Route path='/management-review' element={<ManagementReview />} />
          <Route path='/change-control-form' element={<ChangeControlForm />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
