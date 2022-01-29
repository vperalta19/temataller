import React from 'react';
import	{BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import NavBar from './components/Toolbar';

import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Clases from './pages/Clases';
import Contacto from './pages/Contacto';

export default class App extends React.Component {

	render(){
		return (
			   <Router>
					<NavBar />
		
					<div className="pages">
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="sobre-nosotros" element={<SobreNosotros/>} />
              <Route path="clases" element={<Clases/>} />
              <Route path="contacto" element={<Contacto/>} />
            </Routes>
					</div>
			  </Router>
		  );
	}
}
