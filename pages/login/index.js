import classes from './login.module.css'
import Head from 'next/head'

function Login() {
  return (
    <>
      <Head>
        <title>ĐĂNG NHẬP｜無印良品</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp"/>
      </Head>
      
      <div className = {classes.login_wrapper}>
        <div className={classes.common_header_logo}>
          <div className={classes.login_logo}>
            <a href='/'>
              <img src='https://img.muji.net/img/common/logo-muji.svg' />
            </a>
          </div>
        </div>

        <div className={classes.login_main_wrapper}>
          <h2>Đăng Nhập</h2>
          <div className={classes.login_main}>
              <div className={classes.login_form}>
                <div>
                  <h1 className={classes.form_title}>Members</h1>
                </div>
                <form id='login_form' name='login_form' method='post' className={classes.form}>
                  <div>
                    <p className={classes.form_description}>Đăng nhập bằng email và mật khẩu</p>
                  </div>
                  <div className={classes.login_input_area}>
                    <input className={classes.login_input_userName} placeholder='Địa chỉ email'></input>
                    <div className={classes.userName_error}></div>
                    <input className={classes.login_input_password} placeholder='Mật khẩu'></input>
                    <div className={classes.password_error}></div>
                  </div>
                  <p className={classes.login_button}>
                    <a href='/'>Đăng Nhập</a>
                  </p>
                </form>
                <div className={classes.password_forgot}>
                    <a href='/'>Quên mật khẩu</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login