import React from 'react'
import Layout from "../components/Layout";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";

const Contacts = () => (
    <Layout>
        <Container>
            <Breadcrumbs items={[
                {name: 'Главная', url: '/'},
                {name: 'Контакты', url: '/contacts'},
            ]}/>

            <table className="table table-borderless">
                <tbody>
                <tr>
                    <th scope="row">ОГРН</th>
                    <td>1035801701980</td>
                </tr>
                <tr>
                    <th scope="row">ИНН / КПП</th>
                    <td>5829110244 / 582901001</td>
                </tr>
                <tr>
                    <th scope="row">Дата регистрации</th>
                    <td>18 июня 2003 года</td>
                </tr>
                <tr>
                    <th scope="row">Регистратор</th>
                    <td>Инспекция Федеральной налоговой службы по Октябрьскому району г. Пензы</td>
                </tr>
                <tr>
                    <th scope="row">Юридический адрес</th>
                    <td>440528, Пензенская область, Пензенский район, сельсовет Богословский, территория СДТ Дубрава-3
                    </td>
                </tr>
                <tr>
                    <th scope="row">Организационно-правовая форма</th>
                    <td>Садоводческие, огороднические или дачные некоммерческие товарищества</td>
                </tr>
                </tbody>
            </table>
        </Container>

        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A16c99f5e856a7e91ad8b7ca7ad96a334725fa0fb978b821dc368852b83f0bd59&amp;source=constructor"
            width="100%" height="720" frameBorder="0"></iframe>

    </Layout>
);

export default Contacts;
