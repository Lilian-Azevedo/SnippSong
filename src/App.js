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
  /*  state = {
    searchId: '',
  }

  handleSearch = (input) => {
    this.setState({
      searchId: ,
    });
  } */

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route
              path="/search"
              render={ () => <Search handleSearch={ this.handleSearch } /> }
            />
            <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>);
  }
}

export default App;
