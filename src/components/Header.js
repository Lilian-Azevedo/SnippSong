import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from '.'

export default class Header extends Component {
  state = {
    user: '',
  }
  getUserData = async () => {
    const data = await getUser();
    this.setState({
      user: data,
    })
  }
  componentDidMount () {
    this.getUserData();
  }
  
  render() {
    const { user } = this.state; 
    if (!user.length) return <Loading /> 

    return (
    <header data-testid="header-component">
      <h2 data-testid="header-user-name">{user.name}</h2>
    </header >);
  }
}
