import './App.scss';

// https://dribbble.com/shots/14019613-Sign-up-form

function App() {
  return (
    <section className="App-container">
      <div className="App-container__form">
        <h1 className="App-container__form-title">Create account</h1>
        <h5 className="App-container__form-subtitle">Already have an account? <a href="http://localhost:8080">Sign in</a></h5>

        <form className="form-group">
          <input type="text" className="form-group__input-text form-group__input-text--fullsize" placeholder="Name" />
          <input type="text" className="form-group__input-text form-group__input-text--halfsize-left" placeholder="First name" />
          <input type="text" className="form-group__input-text form-group__input-text--halfsize-right" placeholder="Last name" />
          <input type="email" className="form-group__input-text form-group__input-text--fullsize" placeholder="Email" />
        </form>
      </div>
    </section>
  );
}

export default App;
