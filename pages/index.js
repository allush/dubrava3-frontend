import React from 'react'
import Layout from "../components/Layout";

import { Button } from 'reactstrap';

const Home = () => (
  <Layout>
    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
        <Button color="danger">Danger!</Button>
    </div>
  </Layout>
);

export default Home;
