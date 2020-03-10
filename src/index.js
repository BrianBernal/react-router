import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { One, Two, Three, Four, Five, Six, Seven } from './Components';
import { LayoutOne, LayoutTwo } from './Layouts';

function App() {
  const [isAutenticated, setisAutenticated] = useState(true)
  return (
    <BrowserRouter>
      <h3>Content of main App component</h3>
    <button onClick={() => setisAutenticated(!isAutenticated)}>change state</button>
      <ul>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
        <li><Link to="/four">Four</Link></li>
        <li><Link to="/five">Five</Link></li>
        <li><Link to="/six">Six</Link></li>
        <li><Link to="/seven">Seven</Link></li>
      </ul>

      {
        isAutenticated 
          ? (
            <LayoutOne>
              <Switch>
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
                <Route path="/three" component={Three} />
              </Switch>
            </LayoutOne>
          )
          : (
            <LayoutTwo>
              <Switch>
                <Route path="/four" component={Four} />
                <Route path="/five" component={Five} />
                <Route path="/six" component={Six} />
              </Switch>
            </LayoutTwo>            
          )
      }
    </BrowserRouter>
  );
}

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function RouteWrapperTwo() {

}

render(<App />, document.getElementById('root'));
