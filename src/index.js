import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" component={<HomeContainer/>} />
        {/* <Route exact path="/notes/:id" component={NoteDetailContainer} />
        <Route exact path="/notes/edit/:id" component={NoteEditContainer} /> */}
      </Routes>
    </Router>
  /* </Provider>, */,

  document.getElementById('root')
)
