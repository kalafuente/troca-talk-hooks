import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home"
import PostList from "./components/posts-list"
import Navigation from './components/menu/index';
import { AppContainer } from './AppStyles';
import Counter from './components/counter';
import PostsAndUserList from './components/posts-users-list/index';
import CounterStatus from './components/counter-with-reducer';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/troca-talk-hooks" component={Home} />
          <Route path="/troca-talk-hooks/counter" component={Counter} />
          <Route path="/troca-talk-hooks/post-list" component={PostList} />
          <Route path="/troca-talk-hooks/counter-status" component={CounterStatus} />
          <Route path="/troca-talk-hooks/posts-and-users" component={PostsAndUserList} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
