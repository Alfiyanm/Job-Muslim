import React, { Component } from 'react';

import './components/Login.scss';
import './components/Login.css';

class App extends Component {
  render() {
    return (
      <div className='login-page'>
        <div className='text-left login-field'>
            <div className='login-header ma-auto'>
              <div className='btn btn-full active mar-10'>
                Masuk
              </div>
              <div className='btn btn-full'>
                Daftar
              </div>
            </div>
            
            <div className='login-form ma-auto'>
                <div className='form-field'>
                  <h1 className='text-center h1-med'>Masuk ke Akun</h1>
                  <div className='form-input'>
                    <div>
                      <label className=''> Nama Pengguna :</label>
                      <br />
                      <input type='text' className='input-username ma-auto' placeholder='Masukkan Nama Pengguna' name='username' />
                    </div>
                    <br />
                    <div>
                      <label className=''> Kata Kunci :</label>
                      <br />
                      <input type='password' className='input-username' placeholder='Masukkan Kata Kunci' name='password' />
                    </div>
                    <br />
                    <div className='form-bottom'>
                      <div className=''>
                        <div className='btn btn-secondary'>
                          Masuk
                        </div>
                      </div>
                        <p className='text-blue'>
                          Lupa Password ?
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
