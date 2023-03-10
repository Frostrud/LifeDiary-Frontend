import React from 'react';
import './index.css';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main className="content">
        <div className="mainDiv">
          <div className='leftSide'>
            <h1>Welcome to LifeDiary</h1>
            <h1>The first Cloud-based storage service designed for trans-generational data storage</h1>
            <p>Do you know if your pictures on Instagram will still be there in 50 years?</p>
            <div className='heroSectionButtons'>
              <button className='signUpButton'>
                Join Today for a limited free offer!
              </button>
              <button>
                Or take a look at our current plans
              </button>
            </div>
          </div>
          <div className='pictureDiv'>
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt='Earth From space'></img>
          </div>
          </div>
          <div className='baitDiv'>
            <div>
              <p>Did you know all bla bla bla?</p>
            </div>
            <div>
              <p>Did you know all bla bla bla?</p>
            </div>
            <div>
              <p>Did you know all bla bla bla?</p>
            </div>
            <div>
              <p>Did you know all bla bla bla?</p>
            </div>
          </div>
      </main>
      <footer>© 2023 LifeDiary </footer>
    </div>
  );
}

export default App;