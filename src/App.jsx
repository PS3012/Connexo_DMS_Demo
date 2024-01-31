import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DocumentPanel from "./pages/DocumentPanel/DocumentPanel";
import TrainingManagementSystem from "./pages/TMS/TrainingManagementSystem";
import Question from "./pages/Question/Question";
import ChangeControlForm from "./pages/ConfigForms/ChangeControl/ChangeControl";
import DocumentForm from "./pages/ConfigForms/DocumentForm/DocumentForm";
import LabIncident from "./pages/ConfigForms/LabIncident/LabIncident";
import ManageQuiz from "./pages/ManageQuiz/ManageQuiz";
import RiskAssessment from "./pages/ConfigForms/RiskAssessment/RiskAssessment";
import RootCauseAnalysis from "./pages/ConfigForms/RootCauseAnalysis/RootCauseAnalysis";
import Desktop from "./pages/Desktop/Desktop";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManagementReview from "./pages/ConfigForms/ManagementReview/ManagementReview";
import ChangeControlPanel from "./pages/DocumentPanel/ChangeControlPanel/ChangeControlPanel";
import ExternalAuditPanel from "./pages/DocumentPanel/ExternalAuditPanel/ExternalAuditPanel";
import LabIncidentPanel from './pages/DocumentPanel/LabIncidentPanel/LabIncidentPanel'
import Login from "./pages/Login/Login";
import ActionItems from "./pages/ConfigForms/ActionItems/ActionItems";
import AuditProgram from "./pages/ConfigForms/AuditProgram/AuditProgram";
import Extension from "./pages/ConfigForms/Extension/Extension";
import EffectivenessCheck from "./pages/ConfigForms/EffectivenessCheck/EffectivenessCheck";
import CAPA from "./pages/ConfigForms/Capa/Capa";
import Observation from "./pages/ConfigForms/Observation/Observation";
import ActionItemsPanel from "./pages/DocumentPanel/ActionItemsPanel/ActionItemsPanel";
import AuditProgramPanel from "./pages/DocumentPanel/AuditProgramPanel/AuditProgramPanel";
import QuestionPage from "./pages/Tms/TrainingPage/QuestionPage";
import ManageQuestionPage from "./pages/Tms/TrainingPage/ManageQuestionPage";
import ManageQuestionBank from "./pages/Tms/TrainingPage/ManageQuestionBank";
import ManageQuizzes from "./pages/Tms/TrainingPage/ManageQuizzes";
import { ToastContainer } from "react-toastify";
import ExternalAudit from "./pages/ConfigForms/ExternalAudit/ExternalAudit";
import InternalAudit from "./pages/ConfigForms/InternalAudit/InternalAudit";
import InternalAuditPanel from "./pages/DocumentPanel/InternalAuditPanel/InternalAuditPanel";
import ManagementReviewPanel from "./pages/DocumentPanel/ManagementReviewPanel/ManagementReviewPanel";
import EffectivenessCheckPanel from "./pages/DocumentPanel/EffectivenessCheckPanel/EffectivenessCheckPanel";
import ObservationPanel from "./pages/DocumentPanel/ObservationPanel/ObservationPanel";
import ExtensionPanel from "./pages/DocumentPanel/ExtensionPanel/ExtensionPanel";
import CAPAPanel from "./pages/DocumentPanel/CapaPanel/CapaPanel";
import ActionItemsss from "./pages/ConfigForms/ActionItems/ActionItemsss";
import RiskAssessmentPanel from "./pages/DocumentPanel/RiskAssessmentPanel/RiskAssessmentPanel";
import RootCauseAnalysisPanel from "./pages/DocumentPanel/RootCauseAnalysisPanel/RootCauseAnalysisPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/report" element={<BasicDocument />} />
          <Route path="/" element={<Login />} />
          <Route path="/internal-audit-panel" element={<InternalAuditPanel/>} />
          <Route path="/external-audit-panel" element={<ExternalAuditPanel />} />
          <Route path='/change-control-panel' element={<ChangeControlPanel />} />
          <Route path='/lab-incident-panel/:formId' element={<LabIncidentPanel />} />
          <Route path='/root-cause-analysis-panel' element={<RootCauseAnalysisPanel />} />
          <Route path='/risk-opportunity-panel' element={<RiskAssessmentPanel />} />
          <Route path='/management-review-panel' element={<ManagementReviewPanel/>} />
          <Route path='/extension-panel' element={<ExtensionPanel/>} />
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/manage-quiz' element={<ManageQuiz />} />
          <Route path='/risk-opportunity' element={<RiskAssessment />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/new-document' element={<DocumentForm />} />
          <Route path='/lab-incident' element={<LabIncident />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
          <Route path='/root-cause-analysis' element={<RootCauseAnalysis />} />
          <Route path='/capa' element={<CAPA/>} />
          <Route path='/audit-program' element={<AuditProgram/>} />
          <Route path='/action-item' element={<ActionItems/>} />
          <Route path='/observation' element={<Observation/>} />
          <Route path='/effectiveness-check' element={<EffectivenessCheck/>} />
          <Route path='/management-review' element={<ManagementReview />} />
          <Route path='/change-control' element={<ChangeControlForm />} />
          <Route path='/extension' element={<Extension/>} />
          <Route path='/action-item-panel' element={<ActionItemsPanel/>} />
          <Route path='/audit-program-panel' element={<AuditProgramPanel/>} />
          <Route path='/capa-panel' element={<CAPAPanel />} />
          <Route path='/effectiveness-check-panel' element={<EffectivenessCheckPanel/>} />
          <Route path='/observation-panel' element={<ObservationPanel/>} />
          <Route path='/question-page' element={<QuestionPage />} />
          <Route path='/manage-question' element={<ManageQuestionPage />} />
          <Route path='/manage-question-bank' element={<ManageQuestionBank />} />
          <Route path='/manage-quizzes' element={<ManageQuizzes />} />
          <Route path='/action' element={<ActionItemsss/>} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
