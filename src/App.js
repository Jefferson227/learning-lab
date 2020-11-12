import './App.scss';

function App() {
  return (
    <section className="form-container">
      <div className="form-container__title">Create Account</div>

      <form>
        <label for="email">Email</label>
        <input id="email" type="email" />

        <label for="password">Password</label>
        <input id="password" type="password" />

        <input type="checkbox" />
        <span>I agree to the <a href="http://localhost:8080">Terms & Conditions</a> and <a href="http://localhost:8080">Privacy Policy</a></span>

        <button>Create account</button>
        <button>Sign up with Google</button>
      </form>

      <div>Already have an account? <a href="http://localhost:8080">Log in</a></div>
    </section>
  );
}

export default App;
