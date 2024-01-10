import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Changecontrolform from './pages/ChangeControl/Changecontrolform'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/change-control-form' element={<Changecontrolform />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
