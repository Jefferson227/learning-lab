import './App.scss';

// https://dribbble.com/shots/14508023-Mobile-Sign-up

function App() {
  return (
    <section className="create-account-container">
      <div className="create-account-container__title"><h2>Create Account</h2></div>

      <form className="form-container">
        <div className="input-group">
          <label for="email" className="input-group__label">Email</label>
          <input id="email" className="input-group__input" type="email" />
        </div>

        <div className="input-group">
          <label for="password" className="input-group__label">Password</label>
          <input id="password" className="input-group__input" type="password" />
        </div>

        <div className="input-group input-group--margined">
          <input type="checkbox" className="input-group__checkbox" />
          <span className="input-group__checkbox-text">I agree to the <a href="http://localhost:8080">Terms & Conditions</a> and <a href="http://localhost:8080">Privacy Policy</a></span>
        </div>

        <button>Create account</button>
        <button>Sign up with Google</button>
      </form>

      <div>Already have an account? <a href="http://localhost:8080">Log in</a></div>
    </section>
  );
}

export default App;
