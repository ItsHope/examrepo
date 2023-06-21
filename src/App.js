import React from "react";
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Blogs from "./Pages/Blogs";
import Design from "./Pages/Design";
import Home from "./Pages/Home";
import InternetArt from "./Pages/InternetArtwork";
import Nav from "./Components/Navigation/Nav";
import Footer from './Components/Footer/Footer';

function App() {
  return <Router>
    <GlobalStyle />
		
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Blogs" exact component={Blogs} />
				<Route path="/design" exact component={Design} />
        <Route path="/internetart" exact component={InternetArt} />
			</Switch>
      <Nav/>
      <Footer/>
  </Router>
}

export default App;