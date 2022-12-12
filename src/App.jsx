import './App.scss'
import Main from "./routes/Main"
import Layout from "./components/base/Layout";
import MonList from "./routes/MonList.jsx";
import MonDetail from "./routes/MonDetail";
import Pokedex from "./routes/Pokedex"
import PokedexDetail from "./routes/PokedexDetail"
import Types from "./routes/Types"
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
