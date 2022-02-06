import React, { Component } from 'react';
import { string } from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  state = {
    inputName: '',
    loading: false,
  }

  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async (value) => {
    const { history } = this.props;
    const dataName = {
      name: value,
    };
    this.setState({
      loading: true,
    });
    await createUser(dataName);
    history.push('/search');
  }

  render() {
    const MIN_LETTERS = 3;
    const { inputName, loading } = this.state;

    return (
      <div data-testid="page-login" className="page-login">
        { loading
          ? <Loading />
          : (
            <div className="area-login">
              <h1>Digite seu usuário</h1>
              <input autoComplete="off"
                type="text"
                onChange={ this.handleInput }
                value={ inputName }
                name="inputName"
                data-testid="login-name-input"
              />
              <button
                type="button"
                onClick={ () => this.handleClick(inputName) }
                data-testid="login-submit-button"
                disabled={ inputName.length < MIN_LETTERS }
              >
                Entrar
              </button>
            </div>)}
      </div>);
  }
}

Login.propTypes = {
  history: string.isRequired,
};
