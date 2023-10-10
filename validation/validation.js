const validation = (values) => {
    let errors = {};
  
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.trim().length == 0) {
        errors.username = "Must contain atleast 1 character";  
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.trim().length == 0) {
      errors.password = "Must contain atleast 1 character"; 
    } else if(values.password.length < 8){
        errors.password = "Password must be at least 8 characters long";
    }
  
    return errors;
  };
  
  export default validation;
  