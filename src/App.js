import { Header } from './components/Header'; 
import { Main } from './components/Main';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    <div className= "section"> 
      <Card 
        title = "Job" 
        description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
      <Card 
        title = "Hobby" 
        description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
      <Card 
        title = "Languages" 
        description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
    </div> 
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;

