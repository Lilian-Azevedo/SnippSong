import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import verifyValidation from '../components/verifyValidation';
import ProfileForm from './ProfileForm';

export default class ProfileEdit extends Component {
  state = { loading: true, userInfo: '', isSaveButtonDisabled: true }

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

  handleChange = ({target: { name, type }, target}) => {
    this.setState({
      userInfo: {
        [name]: (type === 'checkbox') ? target.checked : target.value}
    });
    this.setState((previousState) => (
      { isSaveButtonDisabled: verifyValidation(previousState.userInfo) }
    ));
  } 

  onSaveButtonClick = () => {
    console.log('liberou')
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Profile Edit</h1>
        {
          loading 
          ? <Loading />
          : (<ProfileForm {...this.state }
            onInputChange ={this.handleChange}/>)
        }
      </div>);
  }
}
