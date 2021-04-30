
import './App.css';
import Profile from './component/Profile/Profile';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Dialogs from './component/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {addPost} from "./redux/state";



const App = (props) => {

  return (

    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} updateNewPostText={props.updateNewPostText} />} />
        <Route path="/message" render={ () => <Dialogs state={props.state.messagePage} />} />
        <Route path="/home" />
        <Route path="/news" />
        <Route path="/comunity" />
        <Route path="/ftiends" />
        <Route path="/music" />
        <Route path="/gallerey" />
        <Route path="/settings" />
        </div>

    </div>
  );
}



export default App;
