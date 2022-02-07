import { bool, func, string } from 'prop-types';
import React, { Component } from 'react';

export default class ProfileForm extends Component {
  render() {
    const { name, image, email, description,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="form-profile">
        <h4>Imagem:</h4>
        <input
          className="non-showed"
          autoComplete="off"
          name="image"
          type="text"
          data-testid="edit-input-image"
          id="image"
          value={ image }
          onChange={ onInputChange }
        />

        <h4>Nome:</h4>
        <input
          autoComplete="off"
          name="name"
          type="text"
          data-testid="edit-input-name"
          id="name"
          value={ name }
          onChange={ onInputChange }
        />

        <h4>Email:</h4>
        <input
          name="email"
          type="email"
          data-testid="edit-input-email"
          id="email"
          value={ email }
          onChange={ onInputChange }
          autoComplete="off"
        />

        <h4>Descrição:</h4>
        <textarea
          name="description"
          data-testid="edit-input-description"
          id="description"
          value={ description }
          onChange={ onInputChange }
          autoComplete="off"
        />

        <button
          name="isSaveButtonDisabled"
          data-testid="edit-button-save"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
