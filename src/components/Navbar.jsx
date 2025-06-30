import { useState, useEffect } from 'react';

const toggleMode = () => {
  return localStorage.getItem('darkMode') || 'light';
};

function Navbar() {
  const [theme, setTheme] = useState(toggleMode());
  console.log(theme);

  //theme toggle function
  const handleThemToggle = () => {
    const newTheme = theme == 'dark-mode' ? 'light' : 'dark-mode';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = '';
    document.body.classList.add(theme);
    localStorage.setItem('darkMode', theme);
  }, [theme]);
  return (
    <header className="header">
      <div className="header-container container">
        <div className="">1</div>
        <div className="">
          <div className="dark-btn" onClick={handleThemToggle}>
            <input type="checkbox" />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

// 1:18:23
