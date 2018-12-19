import React, { Component } from 'react';
import Login from './login'
import Regester from './regester'

import './styles/style.scss'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      router: <Login />
    }
  }

  login = (login) => {
    return (
      this.setState({ router: login })
    )
  }

  register = (regester) => {
    return (
      this.setState({ router: regester })
    )
  }
  render() {
    const { btnMasuk, btnDaftar } = this.state
    return (
      <div className='login-page'>
        <div className='text-left login-field'>
          <div className='login-header'>
            <button className="btn btn-full" onClick={() => this.login(<Login />)} >
              Masuk
            </button>
            <button className="btn btn-full" onClick={() => this.register(<Regester />)}>
              Daftar
            </button>
          </div>
          {this.state.router}
        </div>
      </div>
    );
  }
}

export default App;
