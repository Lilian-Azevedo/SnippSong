import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  state = { loading: true, userInfo: '' }

  componentDidMount() {
    this.getProfileData();
  }

  getProfileData = async () => {
    const response = await getUser();
    if (response) {
      this.setState({
        userInfo: response,
        loading: false,
      });
    }
  }

  render() {
    const { userInfo: { name, email, description, image }, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading
            ? <Loading />
            : (
              <div>
                <img data-testid="profile-image" src={ image } alt="Foto do usuário" />
                <h3>{name}</h3>
                <h4>{email}</h4>
                <p>{description}</p>
                <Link to="/profile/edit">
                  <button type="button">Editar perfil</button>
                </Link>
              </div>)
        }
      </div>);
  }
}
