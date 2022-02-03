import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Album from './pages/Album';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ () => <Login /> } />
            <Route path="/search" render={ () => <Search /> } />
            <Route path="/album/:id" render={ () => <Album /> } />
            <Route path="/favorites" render={ () => <Favorites /> } />
            <Route exact path="/profile" render={ () => <Profile /> } />
            <Route exact path="/profile/edit" render={ () => <ProfileEdit /> } />
            <Route path="*" render={ () => <NotFound /> } />
          </Switch>
        </BrowserRouter>
      </div>);
  }
}

export default App;
