import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covics from './views/Covics';
import Blog from './views/Blog';
import { Countdown, NewCountdown } from './views/Countdown';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSearch from './views/YoutubeSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {

  let [name, setName] = useState('thanh lieu');
  let [address, setAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: 'todo 1', name: 'xem phim', type: 'lieu' },
    { id: 'todo 2', name: 'học bài', type: 'lieu' },
    { id: 'todo 3', name: 'chơi game', type: 'lieu1' },
    { id: 'todo 4', name: 'đi bơi', type: 'lieu1' },
  ]);

  useEffect(() => {
    console.log('run user effect')
  }, [address])

  const handleOnClick = (event) => {
    if (!address) {
      alert('input trống');
      return;

    };
    let id = Math.floor((Math.random() * 100000) + 1);
    let todo = { id: id, name: address, type: 'lieu' }
    setTodos([...todos, todo]);
    setAddress('');
  }
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }
  const handleDeleteTodo = (id) => {
    let curentTodo = todos;
    curentTodo = curentTodo.filter(item => item.id !== id);
    setTodos(curentTodo);
  }

  const onTimesup = () => {
    // alert('times up');
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />




        </header>
        <Switch>
          <Route path="/" exact>
            <Covics />
          </Route>
          <Route path="/timer">
            <Countdown onTimesup={onTimesup} />
            <span>-------------------</span>
            <NewCountdown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              handleDeleteTodo={handleDeleteTodo}
            />
            <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
            <button onClick={(event) => handleOnClick(event)}>Click me</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id" >
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="/secret">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;