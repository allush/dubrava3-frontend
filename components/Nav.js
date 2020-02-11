import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as TBNav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Link from "next/link";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const items = [
        {name: 'Главная', url: '/'},
        {name: 'Участки в продаже', url: '/plants'},
        {name: 'Контакты', url: '/contacts'},
    ];

    return <Navbar color="dark" dark fixed="top" expand="md">
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <TBNav className="mr-auto" navbar>
                {items.map((item) => (
                    <NavItem key={item.url}>
                        <Link href={item.url}>
                            <NavLink href={item.url}>{item.name}</NavLink>
                        </Link>
                    </NavItem>
                ))}
            </TBNav>
        </Collapse>
    </Navbar>
};

export default Nav;
