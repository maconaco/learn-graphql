import logo from './logo.svg';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import './App.css';

const client = new GraphQLClient({
  url: 'graphql'
})

function App() {
  return (
    <ClientContext.Provider value={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ClientContext.Provider>
  );
}

export default App;
