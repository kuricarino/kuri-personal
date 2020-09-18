import React from 'react';
import './App.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Routes from '../../config/routes';

class App extends React.Component {
  render() {
    return (
      <section class="hero is-primary is-fullheight">
        <Header />
        <Routes />
        <Footer />
      </section>
    )
  }
}

export default App;
