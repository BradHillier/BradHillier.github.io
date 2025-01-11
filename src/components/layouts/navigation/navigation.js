import './navigation.scss';

const NavigationBar = () => {
  return (
    <div className="navigation">
      <nav>
        <a href="#home" class="nav-item">Home</a>
        <a href="#projects" class="nav-item">Projects</a>
        <a href="#about" class="nav-item">About</a>
        <a href="mailto:bradhillier.dev@gmail.com" class="nav-item white">Contact</a>
      </nav>
    </div>

  )
}

export default NavigationBar;