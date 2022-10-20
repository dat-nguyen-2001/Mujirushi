import classes from "./login.module.css";

import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const switchAuthModeHandler = function () {
    setHasAccount((prevState) => !prevState);
  };

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const { handleSubmit, register } = useForm();

  const submitHandler = hasAccount
    ? async ({ email, password }) => {
        try {
          const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });
          if (result.error) {
            alert(`${result.error}: SOMETHINGS GO WRONG HERE!`);
          }
        } catch (err) {
          alert(err);
        }
      }
    : async ({ email, password }) => {
        try {
          await axios.post("/api/auth/signup", {
            name: email.split('@')[0],
            email,
            password,
          });

          const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });
          if (result.error) {
            alert(result.error);
          }
        } catch (err) {
          alert(err);
        }
      };

  return (
    <>
      <Head>
        <title>ĐĂNG NHẬP｜無印良品</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp" />
      </Head>

      <div className={classes.login_wrapper}>
        <div className={classes.common_header_logo}>
          <div className={classes.login_logo}>
            <Link href="/">
              <img src="https://img.muji.net/img/common/logo-muji.svg" />
            </Link>
          </div>
        </div>

        <div className={classes.login_main_wrapper}>
          <h2>{hasAccount ? "Đăng Nhập" : "Đăng ký"}</h2>

          <div className={classes.login_main}>
            <div className={classes.login_form}>
              <div>
                <h1 className={classes.form_title}>Members</h1>
              </div>
              <form
                id="login_form"
                name="login_form"
                method="post"
                className={classes.form}
              >
                <div>
                  <p className={classes.form_description}>
                    {hasAccount
                      ? "Đăng nhập bằng email và mật khẩu"
                      : "Đăng ký"}
                  </p>
                </div>
                <div className={classes.login_input_area}>
                  <input
                    className={classes.login_input_userName}
                    placeholder="Địa chỉ email"
                    required
                    autoFocus
                    id="email"
                    {...register("email")}
                  ></input>
                  <div className={classes.userName_error}></div>
                  <input
                    className={classes.login_input_password}
                    placeholder="Mật khẩu"
                    required
                    id="password"
                    {...register("password")}
                  ></input>
                  <div className={classes.password_error}></div>
                </div>
                <p
                  className={classes.login_button}
                  onClick={handleSubmit(submitHandler)}
                >
                  {hasAccount ? <a>Đăng Nhập</a> : <a>Đăng ký</a>}
                </p>
              </form>
              <div className={classes.sign_up}>
                <div onClick={switchAuthModeHandler}>
                  {hasAccount
                    ? "Tạo tài khoản"
                    : "Đã có tài khoản? Đăng nhập ngay"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
