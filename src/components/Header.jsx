import React from 'react'

// {text} is same as props.text
function Header({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={styles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'blue',
  textColor: 'red',
}

export default Header
