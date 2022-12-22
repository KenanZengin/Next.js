import Head from 'next/head'
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/form.module.css"
import {HiFingerPrint,HiAtSymbol, HiOutlineUser} from "react-icons/hi"
import { useFormik } from 'formik';
import { useState } from 'react';
import { registerValidate } from '../lib/validate';
import { useRouter } from 'next/router';
const Register = () => {

  const router = useRouter()

  const formik = useFormik({
    initialValues:{
      userName : "",
      email:"",
      password:"",
      cpassword:""
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values){
    const options = {
      method : "POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup',options)
      .then(res=>res.json())
      .then(data=>{
        if(data.ok) router.push('http://localhost:3000')
      })
  }

  const [show, setShow] = useState({password:false,cpassword:false})
  return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit?</p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className={`${styles.input_group} ${formik.errors.userName && formik.touched.userName ? "border-rose-600" : ""}`}>
            <input 
            type="text"
            name="userName"
            placeholder="Name"
            className={styles.input_text}
            {...formik.getFieldProps("userName")}/>
            <span className="icon flex items-center px-4 hi">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {/* {formik.errors.userName && formik.touched.userName ? <span className="text-rose-500">{formik.errors.userName}</span> : <></>} */}
          <div  className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? "border-rose-600" : ""}`}>
            <input 
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
            {...formik.getFieldProps("email")}/>
            <span className="icon flex items-center px-4 hi">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>} */}
          <div  className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? "border-rose-600" : ""}`}>
            <input 
            type={`${show.password ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className={styles.input_text}
            {...formik.getFieldProps("password")}/>
             <span className="icon flex items-center px-4"  onClick={()=>setShow({...show,password:!show.password})}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>} */}
          <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? "border-rose-600" : ""}`}>
            <input 
            type={`${show.cpassword ? "text" : "password"}`}
            name="cpassword"
            placeholder="Confirm password"
            className={styles.input_text}
            {...formik.getFieldProps("cpassword")}
            />
             <span className="icon flex items-center px-4"  onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-rose-500">{formik.errors.cpassword}</span> : <></>} */}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.input_button}>
              Login
            </button>
            
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
         Have an account? <Link href={'/login'} legacyBehavior><a className="text-blue-500">Sign In</a></Link>
        </p>
      </section>
    </Layout>
  )
}

export default Register