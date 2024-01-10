import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Changecontrolform from './pages/ChangeControl/Changecontrolform'
import DocumentPanel from './pages/DocumentPanel/DocumentPanel'

function App() {
  localStorage.setItem('username', 'amit.patel@connexo.io')
  localStorage.setItem('password', '1234567890')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/change-control-form' element={<Changecontrolform />} />
          <Route path='/document-panel' element={<DocumentPanel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
