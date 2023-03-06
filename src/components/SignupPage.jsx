import { useState } from "react";

const SignupPage = () => {

  const initialState = {
    email: '',
    password: '',
    language: '',
  }

  const [newSignUp, setNewSignUp] = useState(initialState);
  const [signed, setSigned] = useState(initialState)

  const handleChange = (e) => {
    setNewSignUp(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSignUp(initialState);
    setSigned(newSignUp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={newSignUp.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={newSignUp.password} onChange={handleChange} required />

        <label>Language</label>
        <select name="language" value={newSignUp.language} onChange={handleChange} required>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">French</option>
        </select>

        <button type="submit">Sign up</button>
      </form> 
        

        <p>{signed.language === "en" ? "Hello" : signed.language === "de" ? "Hallo" : signed.language === "fr" ? "Bonjour" : ""}</p>
        <p>Your email is {signed.email}</p>

    </div>
  )
}

export default SignupPage;