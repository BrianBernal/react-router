import React from 'react';

const LayoutOne = ({ children }) => {
  console.log('layout 1')
  return (
  <div>
    <h2>Layout One</h2>
    {children}
  </div>
  )
}

const LayoutTwo = ({ children }) => {
  console.log('layout 2')
  return (
  <div>
    <h2>Layout Two</h2>
    {children}
  </div>
  )
}

export { LayoutOne, LayoutTwo };
