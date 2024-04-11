/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router'
import Apply from './pages/Apply';
import Home from './pages/Home';
import './index.css';
import App from './App';
import Schedule from './pages/Schedule';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/apply" component={Apply} />
      <Route path="/schedule" component={Schedule} />

    </Router>
  ),
  root!
)

