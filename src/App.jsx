import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocumentPanel from './pages/DocumentPanel/DocumentPanel'
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem'
import Question from './pages/Question/Question'
import ChangeControlForm from './pages/ConfigForms/ChangeControlForm'
import DocumentForm from './pages/ConfigForms/DocumentForm'
import LabIncident from './pages/ConfigForms/LabIncident'
import AddQuestion from './pages/AddQuestion/AddQuestion';
import ManageQuiz from './pages/ManageQuiz/ManageQuiz';
import RiskAssesment from './pages/ConfigForms/RiskAssesment'
import RootCauseAnalysis from './pages/ConfigForms/RootCauseAnalysis'
import InternalAudit from './pages/ConfigForms/InternalAudit'
import ExternalAudit from './pages/ConfigForms/ExternalAudit'
import Capa from './pages/ConfigForms/Capa'
import Audit_Program from './pages/ConfigForms/Audit_Program'
import Deviation from './pages/ConfigForms/Deviation'
import Desktop from './pages/Desktop/Desktop';
import Dashboard from './pages/Dashboard/Dashboard';
import ManagementReview from './pages/ConfigForms/ManagementReview';
import ChildExtension from './pages/ConfigForms/ChildExtension'
import ChangeControlPanel from './pages/DocumentPanel/ChangeControlPanel'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/manageQuiz' element={<ManageQuiz />} />
          <Route path='/addQuestion' element={<AddQuestion />} />
          <Route path='/risk-assesment' element={<RiskAssesment />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/document-form' element={<DocumentForm />} />
          <Route path='/lab-incident-form' element={<LabIncident />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
          <Route path='/root-cause-analysis' element={<RootCauseAnalysis />} />
          <Route path='/capa' element={<Capa />} />
          <Route path='/audit-program' element={<Audit_Program />} />
          <Route path='/deviation' element={<Deviation />} />
          <Route path='/management-review' element={<ManagementReview />} />
          <Route path='/change-control-form' element={<ChangeControlForm />} />
          <Route path='/child-extention' element={<ChildExtension />} />
          <Route path='/ChangeControl-panel' element={<ChangeControlPanel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
