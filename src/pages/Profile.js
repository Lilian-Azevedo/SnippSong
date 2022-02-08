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
    console.log(response);
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
      <div data-testid="page-profile" className="page-profile">
        <Header />
        {
          loading
            ? <Loading />
            : (
              <div className="container-profile">
                { image
                  ? (
                    <img
                      className="image-user"
                      data-testid="profile-image"
                      src={ image }
                      alt="Foto do usuário"
                    />)
                  : (
                    <img
                      data-testid="profile-image"
                      src="https://static.thenounproject.com/png/1380525-200.png"
                      alt="Foto do usuário"
                    />)}
                <div>
                  <h4>Nome</h4>
                  <span>{name}</span>
                </div>

                <div>
                  <h4>Email</h4>
                  <span>{ email }</span>
                </div>

                <div>
                  <h4>Descrição</h4>
                  <span>{description}</span>
                </div>

                <Link to="/profile/edit">
                  <button type="button">Editar perfil</button>
                </Link>
              </div>)
        }
      </div>);
  }
}
