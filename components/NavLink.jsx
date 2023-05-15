'use client'

import Link from 'next/link';
import usePathnameWithoutBasepath from '@/hooks/usePathnameWithoutBasepath';

export default function NavLink({ href, className, activeClassName, children, ...props }) {
    const pathname = usePathnameWithoutBasepath();

    const getComputedClassName = () => {
        return pathname === href ? `${className || ''} ${activeClassName}`.trim() : className;
    }

    return (
        <Link href={href} className={getComputedClassName()} {...props}>
            {children}
        </Link>
    );
}
