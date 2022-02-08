import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';
import verifyValidation from '../components/verifyValidation';
import ProfileForm from './ProfileForm';

export default class ProfileEdit1 extends Component {
  state = { loading: true, userInfo: '', disabled: true, redirect: false }

  componentDidMount() {
    this.getProfileData();
  }

  getProfileData = async () => {
    const response = await getUser();
    if (response) {
      this.setState({
        userInfo: response,
        loading: false,
      },
      () => this.setState((previousState) => (
        { disabled: verifyValidation(previousState.userInfo) }
      )));
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ userInfo }) => (
      { userInfo: {
        ...userInfo,
        [name]: value } }
    ));
    this.setState((previousState) => (
      { disabled: verifyValidation(previousState.userInfo) }
    ));
  }

  editInfoProfile = async () => {
    const { userInfo } = this.state;
    this.setState({ loading: true });
    const response = await updateUser(userInfo);
    if (response) {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    const { loading, userInfo, disabled, redirect } = this.state;
    if (redirect) return (<Redirect to="/profile" />);
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Profile Edit</h1>
        {
          loading
            ? <Loading />
            : (
              <ProfileForm
                { ...userInfo }
                isSaveButtonDisabled={ disabled }
                onInputChange={ this.handleChange }
                onSaveButtonClick={ this.editInfoProfile }
              />)
        }
      </div>);
  }
}
