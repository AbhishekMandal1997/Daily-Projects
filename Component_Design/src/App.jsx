import React from 'react';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';

function App() {

  const user = {
    name: "User123",
    email: "user123@ex.com",
    imageU: "https://avatars.githubusercontent.com/u/12345678?v=4",
    bio: "This is user's bio."
  }



  return (
    <>
    <h1>PART 1: Props in Action</h1>  
    <div>
      <Greeting name="John" timeOfDay="Morning" />
      <Greeting name="Sarah" timeOfDay="Afternoon" />
      <Greeting name="Alex" timeOfDay="Evening" /> 
      </div>
    <h1>PART 2: Composition of Components</h1>  
    <div>
      <h2>User Profile</h2>
      <UserProfile name={user.name} imageUrl={user.imageU} email={user.email} bio={user.bio} />
      </div>
      <h1>PART 3: Conditional Rendering</h1>  
      <div>
        <Dashboard isLoggedIn={true} />
        <Dashboard isLoggedIn={false} />
      </div>
      <h1>PART 4: Combining Props, Composition, and Conditional Rendering</h1>
    </>
  )
}

export default App;
