

const login_Validate = (values) => {
 const errors={}
 if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  //password
  if (!values.password){
    errors.password= "Required";
  } else if (values.password.length < 8  || values.password.length > 20){
    errors.password="Must be greater then 8 and less then 20 characters long"
  } else if (values.password.includes(" ")){
    errors.password="Invalide password"
  }
  return errors
}

export default login_Validate




export function registerValidate(values){
    const errors = {}
    if(!values.userName){
        errors.userName="Required"
    } else if (values.userName.includes(" ")) {
        errors.userName="Invalid Username...!"
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password){
        errors.password= "Required";
    } else if (values.password.length < 8  || values.password.length > 20){
        errors.password="Must be greater then 8 and less then 20 characters long"
    } else if (values.password.includes(" ")){
        errors.password="Invalide password"
    }

    if(!values.cpassword){
        errors.cpassword= "Required"
    } else if ( values.password !==values.cpassword){
        errors.cpassword= "Password not match"
    } else if (values.cpassword.includes(" ")){
        errors.cpassword= "Invalid Confirm Password"
    }

    return errors
}
