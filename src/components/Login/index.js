import {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  })
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  //   const navigate = useNavigate()

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handlerChange = event => {
    const {name, value} = event.target
    setDetails(prevState => ({
      ...prevState,
      [name]: value.trim(),
    }))
    // console.log(value)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onSubmitFailure = errorMessage => {
    setShowSubmitError(true)
    setErrorMsg(errorMessage)
  }

  const onSubmitDetails = async e => {
    e.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="card-container">
      <div className="card">
        <h1 className="text">Travel Trip</h1>
        <form onSubmit={onSubmitDetails}>
          <div className="username-container">
            <label htmlFor="username" className="label-text">
              Username
            </label>
            <br />
            <input
              id="name"
              className="username"
              name="username"
              value={details.username}
              onChange={handlerChange}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password" className="label-text">
              Password
            </label>
            <br />

            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="password"
                name="password"
                value={details.password}
                onChange={handlerChange}
              />
              <button
                type="button"
                className="show-or-hide"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <img
                    src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723536269/eye-slash_rheirr.png"
                    alt="hide-password"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dfxytykhs/image/upload/v1720197961/eye_t6aaxr.png"
                    alt="show-password"
                  />
                )}
              </button>
            </div>
            {showSubmitError && <p className="errorMsg">{errorMsg}</p>}
          </div>
          <button type="submit" className="login">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
