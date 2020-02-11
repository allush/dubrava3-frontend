import React from 'react'
import Layout from "../components/Layout";
import Link from "next/link";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";

const current = 'Участки в продаже';
const Plants = () => (
    <Layout>
        <Container>
            <Breadcrumbs items={[
                {name: 'Главная', url: '/'},
                {name: current, url: '/plants'},
            ]}/>

            <h2>{'Участки в продаже'}</h2>
            {[398, 399, 400].map((number) => {
                return <p key={number}>
                    <Link href="/plant/[number]" as={`/plant/${number}`}>
                        <a>Plant #{number}</a>
                    </Link>
                </p>;
            })}
        </Container>
    </Layout>
);

export default Plants;
