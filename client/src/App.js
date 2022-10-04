import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing,Posts,Error,ProtectedRoute} from  "./components/index.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/posts" element={
            <ProtectedRoute>
                <Posts/>
            </ProtectedRoute>
          }/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
