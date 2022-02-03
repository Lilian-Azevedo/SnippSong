import React, { Component } from 'react';
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
        {user === ''
          ? <Loading />
          : (<h2 data-testid="header-user-name">{user.name}</h2>)}
      </header>);
  }
}
