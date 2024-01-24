import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DocumentPanel from "./pages/DocumentPanel/DocumentPanel";
import TrainingManagementSystem from "./pages/TMS/TrainingManagementSystem";
import Question from "./pages/Question/Question";
import ChangeControlForm from "./pages/ConfigForms/ChangeControl/ChangeControl";
import DocumentForm from "./pages/ConfigForms/DocumentForm";
import LabIncident from "./pages/ConfigForms/LabIncident/LabIncident";
import AddQuestion from "./pages/AddQuestion/AddQuestion";
import ManageQuiz from "./pages/ManageQuiz/ManageQuiz";
import RiskAssessment from "./pages/ConfigForms/RiskAssessment";
import RootCauseAnalysis from "./pages/ConfigForms/RootCauseAnalysis";
import InternalAudit from "./pages/ConfigForms/InternalAudit";
import ExternalAudit from "./pages/ConfigForms/ExternalAudit";
import CAPA from "./pages/ConfigForms/CAPA";
import Audit_Program from "./pages/ConfigForms/Audit_Program";
import Deviation from "./pages/ConfigForms/Deviation";
import Desktop from "./pages/Desktop/Desktop";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManagementReview from "./pages/ConfigForms/ManagementReview";
import Extension from "./pages/ConfigForms/Extension";
import ChangeControlPanel from "./pages/DocumentPanel/ChangeControlPanel/ChangeControlPanel";
import InternalAuditPanel from "./pages/DocumentPanel/InternalAuditPanel";
import ExternalAuditPanel from "./pages/DocumentPanel/ExternalAuditPanel";
import DeviationPanel from './pages/DocumentPanel/DeviationPanel'
import LabIncidentPanel from './pages/DocumentPanel/LabIncidentPanel/LabIncidentPanel'
import RootCauseAnalysisPanel from './pages/DocumentPanel/RootCauseAnalysisPanel'
import RiskAssessmentPanel from './pages/DocumentPanel/RiskAssessmentPanel'
import ManagementReviewPanel from './pages/DocumentPanel/ManagementReviewPanel'
import ExtensionPanel from './pages/DocumentPanel/ExtensionPanel'
import ActionItems from './pages/ConfigForms/ActionItems'
import Observation from './pages/ConfigForms/Observation'
import EffectivenessCheck from './pages/ConfigForms/EffectivenessCheck'
import ActionItemsPanel from './pages/DocumentPanel/ActionItemsPanel'
import AuditProgramPanel from './pages/DocumentPanel/AuditProgramPanel'
import CAPAPanel from './pages/DocumentPanel/CAPAPanel'
import EffectivenessCheckPanel from './pages/DocumentPanel/EffectivenessCheckPanel'
import ObservationPanel from './pages/DocumentPanel/ObservationPanel'
import Login from "./pages/Login/Login";
import BasicDocument from "./components/BasicDocument";

function App() {
  localStorage.setItem("username", "amit.guru@connexo.io")
  localStorage.setItem("password", "Dms@123")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/report" element={<BasicDocument />} />
          <Route path="/" element={<Login />} />
          <Route path="/internal-audit-panel" element={<InternalAuditPanel />} />
          <Route path="/external-audit-panel" element={<ExternalAuditPanel />} />
          <Route path='/change-control-panel' element={<ChangeControlPanel />} />
          <Route path='/deviation-panel' element={<DeviationPanel />} />
          <Route path='/lab-incident-panel' element={<LabIncidentPanel />} />
          <Route path='/root-cause-analysis-panel' element={<RootCauseAnalysisPanel />} />
          <Route path='/risk-assessment-panel' element={<RiskAssessmentPanel />} />
          <Route path='/management-review-panel' element={<ManagementReviewPanel />} />
          <Route path='/extension-panel' element={<ExtensionPanel />} />
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/manage-quiz' element={<ManageQuiz />} />
          <Route path='/add-question' element={<AddQuestion />} />
          <Route path='/risk-assessment' element={<RiskAssessment />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/new-document' element={<DocumentForm />} />
          <Route path='/lab-incident' element={<LabIncident />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
          <Route path='/root-cause-analysis' element={<RootCauseAnalysis />} />
          <Route path='/capa' element={<CAPA />} />
          <Route path='/audit-program' element={<Audit_Program />} />
          <Route path='/action-item' element={<ActionItems />} />
          <Route path='/observation' element={<Observation />} />
          <Route path='/effectiveness-check' element={<EffectivenessCheck />} />
          <Route path='/deviation' element={<Deviation />} />
          <Route path='/management-review' element={<ManagementReview />} />
          <Route path='/change-control' element={<ChangeControlForm />} />
          <Route path='/extension' element={<Extension />} />
          <Route path='/action-item-panel' element={<ActionItemsPanel />} />
          <Route path='/audit-program-panel' element={<AuditProgramPanel />} />
          <Route path='/capa-panel' element={<CAPAPanel />} />
          <Route path='/effectiveness-check-panel' element={<EffectivenessCheckPanel />} />
          <Route path='/observation-panel' element={<ObservationPanel />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
