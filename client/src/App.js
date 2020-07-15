import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Result from './pages/Result';

function App() {
  return (
    <>
      <div class="container-fluid mx-0 px-0">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/result" component={Result} />
        </BrowserRouter>
      </div>

    </>

  );
}
export default App;
