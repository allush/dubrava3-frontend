import React from 'react'
import Layout from "../components/Layout";
import Link from "next/link";

const Plants = () => (
  <Layout>
    <div>Plants</div>
      {[398, 399, 400].map((number)=>{
          return <p>
              <Link href="/plant/[number]" as={`/plant/${number}`}>
                  <a>Plant #{number}</a>
              </Link>
          </p>;
      })}
  </Layout>
);

export default Plants;
