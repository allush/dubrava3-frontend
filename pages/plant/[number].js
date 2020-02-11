import React from 'react'
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import Container from "../../components/Container";
import Breadcrumbs from "../../components/Breadcrumbs";

const Plant = () => {
    const router = useRouter();
    const { number } = router.query;

    return <Layout>
        <Container>
            <Breadcrumbs items={[
                {name: 'Главная', url: '/'},
                {name: 'Участки в продаже', url: '/plants'},
                {name: `Участок ${number}`, url: `/plant/${number}`},
            ]}/>
        <div>Участок #{number}</div>
        </Container>
    </Layout>
};

export default Plant;
