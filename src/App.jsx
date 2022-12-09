import './App.css'
import Main from "./components/Main"
import Layout from "./components/Layout";
import MonList from "./components/MonList.jsx";
import MonDetail from "./components/MonDetail";
import Missing from "./components/Missing";
import {Routes, Route} from "react-router-dom";




function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="pokemon">
          <Route index element={<MonList />}/>
          <Route path="/pokemon/:id" element={<MonDetail />} />
        </Route>
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  )
}

export default App
