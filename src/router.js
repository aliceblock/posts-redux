import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router