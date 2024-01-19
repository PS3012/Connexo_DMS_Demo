import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocumentPanel from './pages/DocumentPanel/DocumentPanel'
import TrainingManagementSystem from './pages/TMS/TrainingManagementSystem'
import Question from './pages/Question/Question'
import ChangeControlForm from './pages/ConfigForms/ChangeControlForm'
import InternalAudit from './pages/ConfigForms/InternalAudit'
import ExternalAudit from './pages/ConfigForms/ExternalAudit'
import ChildExtension from './pages/ConfigForms/ChildExtension'

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
          <Route path='/child-extention' element={<ChildExtension />} />
        </Routes> 
      </BrowserRouter>

    </>
  )
}

export default App
