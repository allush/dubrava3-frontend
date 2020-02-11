import React from 'react'
import Layout from "../components/Layout";

import Square from "../components/features/Square";
import Count from "../components/features/Count";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import Road from "../components/features/Road";
import Electricity from "../components/features/Electricity";

const Home = () => (
  <Layout>
      <Carousel/>
      <Container>
          <Electricity/>
          <Road/>
          <Count/>
          <Square/>
      </Container>
  </Layout>
);

export default Home;
