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

    return <Navbar color="light" light expand="md">

        <Link href="/">
            <NavbarBrand href="/">СНТ "Дубрава-3"</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <TBNav className="mr-auto" navbar>
                <NavItem>
                    <Link href="/">
                        <NavLink href="/">Главная</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/plants">
                        <NavLink href="/plants">Участки</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/contacts">
                        <NavLink href="/contacts">Контакты</NavLink>
                    </Link>
                </NavItem>
            </TBNav>
        </Collapse>
    </Navbar>
};

export default Nav;
