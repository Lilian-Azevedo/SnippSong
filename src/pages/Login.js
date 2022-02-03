import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  state = {
    inputName: '',
    loading: false,
    hasLoanding: false,
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async (value) => {
    const {loading} = this.state;
    const  {history} = this.props;
    const dataName = {
      name: value,
    };
    this.setState({
      loading: true,
    });
    await createUser(dataName);
    history.push('/search');
  }
  
  componentWillUnmount() {
    this.setState({
      loading: false,
    })
  }

  render() {
    const MIN_LETTERS = 3;
    const { inputName, loading, hasLoanding } = this.state;

    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <hr />
        { loading
          ? <Loading />
          : (
            <div>
              <input
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
          {/* { hasLoanding && <Redirect to="/search" /> } */}
      </div>);
  }
}
