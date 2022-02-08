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
      <header data-testid="header-component" className="header">
        {user === ''
          ? <Loading />
          : (
            <div className="container-header-user">
              <div className="logo" />
              <h2 data-testid="header-user-name">
                {/* Boas-vindas, */}
                {user.name}
                {/*       ! */}
              </h2>
              <Link to="/">
                <button type="button">Trocar usuário</button>
              </Link>
            </div>)}
        <nav>
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Minhas músicas</Link>
          <Link to="/profile" data-testid="link-to-profile">Meu perfil</Link>
        </nav>
      </header>);
  }
}
