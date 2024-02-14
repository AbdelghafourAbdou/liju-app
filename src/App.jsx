import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import Yes from '../components/Yes'

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Landing/>}/>
      <Route path='/yes' element={<Yes/>} />
      </Routes>
    </Router>
  )
}

export default App