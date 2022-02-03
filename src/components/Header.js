import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

export default class Header extends Component {
  state = {
    user: '',
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const data = await getUser();
    this.setState({
      user: data,
    });
  }

  render() {
    const { user } = this.state;

    return (
      <header data-testid="header-component">
        <nav>
          <ul>
            <li><Link to="/search" data-testid="link-to-search">Pesquisar</Link></li>
            <li>
              <Link
                to="/favorites"
                data-testid="link-to-favorites"
              >
                Minhas músicas
              </Link>
            </li>
            <li><Link to="/profile" data-testid="link-to-profile">Meu perfil</Link></li>
          </ul>
        </nav>

        {user === ''
          ? <Loading />
          : (<h2 data-testid="header-user-name">{user.name}</h2>)}
      </header>);
  }
}
