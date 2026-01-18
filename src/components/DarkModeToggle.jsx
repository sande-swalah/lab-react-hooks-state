import React from 'react'

const DarkModeToggle = ({ darkMode = false, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} data-testid="dark-toggle">
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
