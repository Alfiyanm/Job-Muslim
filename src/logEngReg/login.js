import React, { Component } from 'react';
// import WOW from 'wow.js'

import './styles/style.scss';

class Login extends Component {
  state = {
    masuk: 'btn btn-secondary',
    animasi: ''
  }
  // componentDidMount() {
  //   new WOW().init()
  // }

  masuk = () => {
    return this.setState({ masuk: "btn btn-secondary wow swing", animasi: " wow bounceIn" })
  }

  render() {
    let { masuk, animasi } = this.state
    return (
      <div className='login-page '>
        <div className='text-left login-field wow bounceIn'>
          <div className='login-form '>
            <div className='form-field'>
              <h1 className='h1-med'>Masuk Akun</h1>
              <div className='form-input'>
                <div>
                  <label className='font-label'> Nama Pengguna :</label>
                  <br />
                  <input
                    type='text'
                    className='input-username'
                    placeholder='Masukkan Nama Pengguna'
                    name='username' />
                </div>
                <br />
                <div>
                  <label className='font-label'> Kata Kunci :</label>
                  <br />
                  <input
                    type='password'
                    className='input-username shadow-input'
                    placeholder='Masukkan Kata Kunci'
                    name='password' />
                </div>
                <br />
                <div className='form-bottom'>
                  <div className='btn-secondary' className={animasi}>
                    <button className={masuk} onClick={() => this.masuk()}>
                      Masuk
                        </button>
                  </div>
                  <p className='text-blue'>
                    Lupa Password ?
                        </p>
                </div>
              </div>
              <div className="font-loker">LOKER MUSLIM</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
