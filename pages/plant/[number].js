import React from 'react'
import Layout from "../../components/Layout";
import {useRouter} from "next/router";

const Plant = () => {
    const router = useRouter();
    const { number } = router.query;

    return <Layout>
        <div>Plant #{number}</div>
    </Layout>
};

export default Plant;
