import React, { Component } from 'react';

import './styles/style.scss';

class Regester extends Component {
  render() {
    return (
      <div className='login-page '>
        <div className='text-left login-field wow bounceIn'>
            <div className='login-form ma-auto'>
                <div className='form-field'>
                  <h1 className='text-center h1-med'>Daftar Akun</h1>
                  <div className='form-input'>
                    <div>
                      <label className='font-label'> Nama :</label>
                      <br />
                      <input type='text' className='input-username ma-auto' placeholder='Masukkan Nama Pengguna' name='username' />
                    </div>
                    <br/>
                    <div>
                      <label className='font-label'> Email:</label>
                      <br />
                      <input type='text' className='input-username ma-auto' placeholder='Masukkan Email Pengguna' name='username' />
                    </div>
                    <br />
                    <div>
                      <label className='font-label'> Password  :</label>
                      <br />
                      <input type='password' className='input-username' placeholder='Masukkan Kata Kunci' name='password' />
                    </div>
                    <br/>
                    <div>
                      <label className='font-label'>Konfirmasi Password  :</label>
                      <br />
                      <input type='password' className='input-username' placeholder='konfirmasi Kata Kunci' name='password' />
                    </div>
                    <br />
                    <div className='form-bottom'>
                      <div className=''>
                        <div className='btn btn-secondary wow bounceIn'>
                          Daftar
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Regester;
