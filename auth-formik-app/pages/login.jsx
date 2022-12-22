import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/form.module.css"
import {HiFingerPrint,HiAtSymbol} from "react-icons/hi"
import { useState } from "react";
import { signIn,signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_Validate from "../lib/validate";
import { useRouter } from "next/router";
const Login = () => {

  const [show, setShow] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validate :login_Validate,
    onSubmit
    
  })

  console.log(formik.errors);

  async function onSubmit(values){
    const status = await signIn('credentials',{
      redirect : false,
      email : values.email,
      password  :values.password,
      callbackUrl : "/"
    })

    if(status.ok) router.push(status.url)
  }

  //google handler function

  async function handleGoogleSingIn(){
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }

  async function handleGithubSingIn(){
    signIn('github',{callbackUrl:"http://localhost:3000"})
  }




  return (
    <Layout>
      <Head>
        <title>Log in</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit?</p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input 
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
            onChange={formik.handleChange}
            value={formik.values.email}
            {...formik.getFieldProps("email")}/>
            <span className="icon flex items-center px-4 hi">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}
          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input 
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className={styles.input_text}
            onChange={formik.handleChange}
            value={formik.values.password}
            {...formik.getFieldProps("password")}/>
             <span className="icon flex items-center px-4"  onClick={()=>setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
            
            
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>} */}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.input_button}>
              Login
            </button>
            <div className="input-button">
              <button type="button" className={styles.input_button_custom} onClick={handleGoogleSingIn}>
                Sing in with Google <Image src={'/assets/google.svg'} width="20" height={20} alt="img"></Image>
              </button>
            </div>
            <div className="input-button" >
              <button type="button" className={styles.input_button_custom} onClick={handleGithubSingIn}>
                Sing in with Github <Image src={'/assets/github.svg'} width="25" height={25} alt="img"></Image>
              </button>
            </div>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don't have an account yet? <Link href={'/register'} legacyBehavior><a className="text-blue-500">Sign Up</a></Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
