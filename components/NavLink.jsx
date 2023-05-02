'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    activeClassName: PropTypes.string.isRequired
};

export default function NavLink({ href, className, activeClassName, children, ...props }) {
    const pathname = usePathname();
    const [computedClassName, setComputedClassName] = useState(className);

    useEffect(() => {
        const link = new URL(href, location.href).pathname;
        const active = new URL(pathname, location.href).pathname;

        const newClassName = link === active ? `${className || ''} ${activeClassName}`.trim() : className;
        if (newClassName !== computedClassName) {
            setComputedClassName(newClassName);
        }
    }, [pathname, computedClassName, href, className, activeClassName]);

    return (
        <Link href={href} className={computedClassName} {...props}>
            {children}
        </Link>
    );
}
