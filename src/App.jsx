import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocumentPanel from './pages/DocumentPanel/DocumentPanel'
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem'
import Question from './pages/Question/Question'
import ChangeControlForm from './pages/ConfigForms/ChangeControlForm'
import InternalAudit from './pages/ConfigForms/InternalAudit'
import ExternalAudit from './pages/ConfigForms/ExternalAudit'
import Capa from './pages/ConfigForms/Capa'
import Audit_Program from './pages/ConfigForms/Audit_Program'
import ActionItems from './pages/ConfigForms/ActionItems'
import Observation from './pages/ConfigForms/Observation'
import EffectivenessCheck from './pages/ConfigForms/EffectivenessCheck'

function App() {
  localStorage.setItem('username', 'amit.patel@connexo.io')
  localStorage.setItem('password', '1234567890')
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/question' element={<Question />} />
          <Route path='/change-control-form' element={<ChangeControlForm />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
          <Route path='/training-management-system' element={<TrainingManagementSystem />} />
          <Route path='/internal-audit' element={<InternalAudit />} />
          <Route path='/external-audit' element={<ExternalAudit />} />
          <Route path='/capa' element={<Capa/>} />
          <Route path='/audit-program' element={<Audit_Program/>} />
          <Route path='/action-items' element={<ActionItems/>} />
          <Route path='/observation' element={<Observation/>} />
          <Route path='/effectiveness' element={<EffectivenessCheck/>} />
        </Routes> 
      </BrowserRouter>

    </>
  )
}

export default App;
