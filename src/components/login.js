import { GoogleLogin } from 'react-google-login';

const client_id = "1039181549088-lf6dttv3hjv0jmj6pkonhu8oceic3731.apps.googleusercontent.com";

function Login() {

  const onSuccess = (res) => {
    console.log("YAY!! LOGIN WORKING");
  }

  const onFailure = (res) => {
    console.log("OOPS! ARE YOU SURE EVERYTHING IS RIGHT?");
  }

  return (
    <div id="loginButton">
      <GoogleLogin
        clientId={client_id}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;
