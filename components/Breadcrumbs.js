import React from 'react';
import Link from "next/link";

const Breadcrumbs = ({items}) => {

    return <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {items.map((item, index) => {
                if (index < items.length - 1) {
                    return <li key={index} className={`breadcrumb-item`}>
                        <Link href={item.url}>
                            <a href={item.url}>{item.name}</a>
                        </Link>
                    </li>;
                } else {
                    return <li key={index} className="breadcrumb-item active"  aria-current="page">{item.name}</li>;
                }
            })}
        </ol>
    </nav>

};

export default Breadcrumbs;
