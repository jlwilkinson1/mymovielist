import './App.css';
import ParentComponent from "./components/parentComponent"
import 'bootstrap/dist/css/bootstrap.css'; 
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"; 
import Nav from './components/bottomNav'
import Login from './components/navComponents/login'
import Details from './components/navComponents/details'
import Main from './components/navComponents/main'
import AddMovies from './components/navComponents/addMovie';
import UpdateMovie from './components/navComponents/updateMovie'
import About from './components/navComponents/about'

function App() {
  return (
    <div className="App">
      
      <div className="container">
      
      <Router>
       <Nav />
       <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/details/:id" exact component={Details}/>
         <Route path="/about" exact component={About}/>
         <Route path="/addmovie" exact component={AddMovies}/>
         <Route path="/" exact component={ParentComponent}/>
         <Route path="/movieupdate" exact component={UpdateMovie}/>
       </Switch>
    </Router>   
      </div>
      
    </div>
  );
}
//google download andriod studio
export default App;
