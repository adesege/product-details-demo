import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './assets/css/styles.css';
import { AppLoader } from './atoms';
import store from './store';

const Main = lazy(() => import(/* webpackChunkName: "pages/main" */ './pages/Main'));

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<AppLoader center />}>
            <Route
              exact
              path="/"
              component={Main}
            />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>
);

const wrapper = document.getElementById('app');
ReactDOM.render(<App />, wrapper);
