import myPhoto from './images/myphoto.jpg'

function App() {
  return (
    <div>
      <h1>Hi, I'm Al Cerdan Lico</h1>
      <img src={myPhoto} alt="My Headshot" />
      <h2>About me</h2>
      <p>This is a paragraph about my biography</p>
      <a href='https://www.linkedin.com/in/alcerdanlico/'>LinkedIn</a>
      <a href='https://github.com/alpogi2dmax/'>Github</a>
    </div>
  )
}

export default App;
