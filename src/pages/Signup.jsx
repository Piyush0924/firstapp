import React from 'react';

const Signup = (props) => {
  // Updating the UI with the help of useState
  let [email, setEmail] = React.useState("");
  let [emailError, setEmailError] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordError, setPasswordError] = React.useState("");

  const onemailChange =(e)=>{
    setEmail(e.target.value);
  }

  const onpasswordChange =(e)=>{
    setPassword(e.target.value);
  }

  const onSave = () => {
    if (!email){
      setEmailError("Email is mandatory");
    } else {
      setEmailError(false);
    }

    if (!password){
      setPasswordError("Password is mandatory");
    } else {
      setPasswordError(false);
    }
  }

  return (
    <div className='container mt-2 text-bg-light border-dark border rounded p-4' style={{ width: '50%' }}>
      <div className='row justify-content-md-center'>
        <div className="col-lg-4">
          <h1 className='mb-5 rounded-3'>Signup Form!</h1>

          <div className='mb-3'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input onKeyUp={onemailChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          {emailError && <small className='text-danger'>{emailError}</small>}
          </div>

          <div className='mb-3'>
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input onKeyUp={onpasswordChange} type="password" id="inputPassword5" className="form-control" placeholder="Password" aria-describedby="passwordHelpBlock" />
            <div id="passwordHelpBlock" className="form-text font-bold text-bg-white">
            {passwordError && <small className='text-danger'>{passwordError}</small>}
<div>              Your password must be 8-20 characters long
</div>            </div>
          </div>

          <p className='mb-5 p-5'>
            <button onClick={onSave} className='btn btn-primary' type="button">Signup</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
