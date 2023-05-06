import Navbar from "./components/Navbar";
import { Route, Routes as Switch } from 'react-router-dom';
import * as Layout from './page'
import axios from "axios";

axios.defaults.baseURL = 'https://amway.pythonanywhere.com/'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' element={<Layout.Main/>}/>
        <Route path='*' element={<Layout.Main/>}/>
        <Route path='/catalog/' element={<Layout.Catalog/>}/>
        <Route path='/contacts/' element={<Layout.Contacts/>}/>
        <Route path='/comments/' element={<Layout.Comments/>}/>
      </Switch>
    </div>
  );
}

export default App;
