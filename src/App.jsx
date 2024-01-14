import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocumentPanel from './pages/DocumentPanel/DocumentPanel'
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem'
import Question from './pages/Question/Question'
import ChangeControlForm from './pages/ConfigForms/ChangeControlForm'
import DocumentForm from './pages/ConfigForms/DocumentForm'
import LabIncident from './pages/ConfigForms/LabIncident'
import AddQuestion from './pages/AddQuestion/AddQuestion';
import ManageQuiz from './pages/ManageQuiz/ManageQuiz';
import RiskAssesment from './pages/ConfigForms/RiskAssesment';
// import TTS from './pages/TTS/TTS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/test' element={<TTS />} /> */}
          <Route path='/question' element={<Question />} />
          <Route path='/addQuestion' element={<AddQuestion />} />
          <Route path='/manageQuiz' element={<ManageQuiz />} />
          <Route path='/risk-assesment' element={<RiskAssesment />} />
          <Route path='/change-control-form' element={<ChangeControlForm />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/document-form' element={<DocumentForm />} />
          <Route path='/lab-incident-form' element={<LabIncident />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
