import './style.css';

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Home</h1>
        <p>Welcome to the homepage!</p>
      </div>
      
      <div className="right-navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
