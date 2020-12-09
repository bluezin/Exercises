import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import List from '../components/List';
import Layout from '../components/Layout/Layout';
import Edit from '../components/Edit';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={App} />
            <Route exact path="/list" component={List} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
