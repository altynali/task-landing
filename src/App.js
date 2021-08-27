import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import { Route, Switch, useLocation } from 'react-router';
import Blogers from './components/Blogers/Blogers';
import OpenCard from './components/OpenCard.js/OpenCard';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  let pageSwitch;

  if (location.pathname === '/blogers') pageSwitch = 'Блогеры';
  else if (location.pathname === '/open-card') pageSwitch = 'Максим Максимов';

  return (
    <div className='App'>
      <Navbar />
      <div className='content-main'>
        <div className='content-left'>
          Главная <span>/</span>
        </div>
        {location.pathname === '/open-card' ? (
          <div className='content-left content-left-blog'>
            Блогеры <span>/</span>
          </div>
        ) : null}
        <span className='active-switch'>{pageSwitch}</span>
      </div>
      <Switch>
        <Route exact path='/blogers' component={Blogers} />
        <Route exact path='/open-card' component={OpenCard} />
        <Route path='/' component={Content} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
