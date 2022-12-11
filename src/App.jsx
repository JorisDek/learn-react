import './App.scss'
import Main from "./components/Main"
import Layout from "./components/Layout";
import MonList from "./components/MonList.jsx";
import MonDetail from "./components/MonDetail";
import Pokedex from "./components/Pokedex"
import PokedexDetail from "./components/PokedexDetail"
import Types from "./components/Types"
import Missing from "./components/Missing";
import {Routes, Route} from "react-router-dom";




function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="pokedex">
          <Route index element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokedexDetail />} />
        </Route>
        <Route path="pokemon">
          <Route index element={<MonList />}/>
          <Route path="/pokemon/:id" element={<MonDetail />} />
        </Route>
        <Route index path="types" element={<Types />} />
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  )
}

export default App
