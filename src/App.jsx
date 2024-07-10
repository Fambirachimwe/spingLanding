
import { AuthScreen } from "./AuthScreeen";
import { Route, Routes } from 'react-router-dom'
import Landing from "./Landing";


function App() {


  return (
    <>

      <Routes>
        <Route path="/login" element={<AuthScreen />} />
        <Route path="/" element={<Landing />} />
      </Routes>

    </>
  )
}

export default App
