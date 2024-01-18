import Desktop from './pages/Desktop/Desktop';
import Question from './pages/Question/Question';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageQuiz from './pages/ManageQuiz/ManageQuiz';
import AddQuestion from './pages/AddQuestion/AddQuestion';
import InternalAudit from './pages/ConfigForms/InternalAudit'
import ExternalAudit from './pages/ConfigForms/ExternalAudit'
import RiskAssesment from './pages/ConfigForms/RiskAssesment';
import DocumentPanel from './pages/DocumentPanel/DocumentPanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagementReview from './pages/ConfigForms/ManagementReview';
import ChangeControlForm from './pages/ConfigForms/Changecontrolform';
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem';
import DivisionModal from './components/Modals/ProjectDivisionModal/DivisionModal';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/popup' element={<DivisionModal />} />
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/manageQuiz' element={<ManageQuiz />} />
          <Route path='/addQuestion' element={<AddQuestion />} />
          <Route path='/risk-assesment' element={<RiskAssesment />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
          <Route path='/management-review' element={<ManagementReview />} />
          <Route path='/change-control-form' element={<ChangeControlForm />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
