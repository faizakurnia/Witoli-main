import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/posts/Posts'
import SinglePost from './components/post/SinglePost'
import Navigation from './navbar/Navigation';
import Home from './screen/Home';
import ListWisata from './screen/ListWisata';
import Footer from './footer/Footer';
import DetailWisata from './screen/DetailWisata';
import ListKuliner from './screen/ListKuliner';
import ListPenginapan from './screen/ListPenginapan';
import DescriptionPage from './screen/DescriptionPage';

export default function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/wisatas" component={ListWisata} />
        <Route path="/kuliners" component={ListKuliner} />
        <Route path="/penginapan" component={ListPenginapan} />
        <Route path="/description/:id" component={DescriptionPage} />
        <Route path="/:slug" component={DetailWisata} />
      </Switch>
      <Footer/>
    </Router>
  )
}