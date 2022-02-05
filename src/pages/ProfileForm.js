import React, { Component } from 'react';

export default class ProfileForm extends Component {
  render() {
    const { name, image, email, description,
        isSaveButtonDisabled, onInputChange, onSaveButtonClick} = this.props;
    return (
        <form className="formProfile">
            <label htmlFor="image">
              Imagem:
              <input
                name="image"
                type="text"
                data-testid="edit-input-image"
                id="image"
                value={ image }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="name">
              Nome:
              <input
                name="name"
                type="text"
                data-testid="edit-input-name"
                id="name"
                value={ name}
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="email">
              Email:
              <textarea
                name="email"
                data-testid="edit-input-email"
                id="email"
                value={ email }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="description">
              Descrição:
              <textarea
                name="description"
                data-testid="edit-input-description"
                id="description"
                value={ description }
                onChange={ onInputChange }
              />
            </label>
            <br />
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
