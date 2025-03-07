import './App.css';

function Login() {
let name = "Yadav Ji";
let style = {color:"red", fontSize:"20px"};  // inline css
  return (
    <div className="App">
        <p>
            React developer
        </p>
        <h3 style={style}>Hello {name}</h3>  {/* won't work without closing the tag */}
    </div>
  );
}

export default Login;