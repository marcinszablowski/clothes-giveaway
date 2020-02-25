import React, { Component } from 'react';

const emailRegex = /\S+@\S+\.\S+/;

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
}

class HomeForm extends Component {

  state = {
    userName: "",
    userEmail: "",
    userMessage: "",
    formErrors: {
      userName: "",
      userEmail: "",
      userMessage: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors) 
    && this.state.userName !== "" 
    && this.state.userEmail !== "" 
    && this.state.userMessage !== "") {
      console.log(`
      --SUBMITING--
      Name: ${this.state.userName}
      Email: ${this.state.userEmail}
      Message: ${this.state.userMessage}
      `);
    }
    else {
      console.error("FORM INVALID");
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length < 3
            ? "Wpisz poprawne imię"
            : "";
        break;
      case "userEmail":
        formErrors.userEmail =
          emailRegex.test(value)
            ? ""
            : "Wpisz poprawny adres email";
        break;
      case "userMessage":
        formErrors.userMessage =
          value.length < 120
            ? "Wpisz poprawną wiadomość"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="home-form-container" id="kontakt">
        <div className="home-form-left"></div>
        <div className="home-form-right">
          <p className="home-header-text">Skontaktuj się z nami</p>
          <div className="decoration"></div>

          <form
            id="form"
            className="home-form"
            method="POST"
            action="https://fer-api.coderslab.pl/v1/portfolio/contact"
            onSubmit={this.handleSubmit}
            noValidate
          >

            <div className="home-form-names">
              <div className="home-form-item">
                <label htmlFor="userName">Wpisz swoje imię</label>
                <br></br>
                <input
                  id="userName"
                  id={formErrors.userName.length > 0 ? "error" : null}
                  name="userName"
                  type="text"
                  placeholder="Krzysztof"
                  noValidate
                  onChange={this.handleChange}>
                </input>

                {formErrors.userName.length > 0 && (
                  <span className="home-form-error mail-error">{formErrors.userName}</span>
                )}
              </div>

              <div className="home-form-item">
                <label htmlFor="useEmail">Wpisz swój e-mail</label>
                <br></br>

                <input
                  id="userEmail"
                  id={formErrors.userEmail.length > 0 ? "error" : null}
                  type="mail"
                  name="userEmail"
                  placeholder="krzysztof@email.pl"
                  noValidate
                  onChange={this.handleChange}>
                </input>

                {formErrors.userEmail.length > 0 && (
                  <span className="home-form-error mail-error">{formErrors.userEmail}</span>
                )}
              </div>
            </div>

            <div className="home-form-textarea">
              <label htmlFor="userMessage">Twoja wiadomość</label>
              <textarea
                id="userMessage"
                id={formErrors.userMessage.length > 0 ? "error" : null}
                name="userMessage"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                noValidate
                onChange={this.handleChange}>
              </textarea>

              {formErrors.userMessage.length > 0 && (
                <span className="home-form-error mail-error">{formErrors.userMessage}</span>
              )}
            </div>

            <button
              className="form-btn"
              type="submit">
              Wyślij
          </button>

            <div id="error-msg"></div>
          </form>
        </div>
      </div>
    )
  }
}

export default HomeForm;