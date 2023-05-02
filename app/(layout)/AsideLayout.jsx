'use client'

import { useState } from 'react';
import Aside from './Aside'
import useTransitionStopOnResize from '../../hooks/useTransitionStopOnResize'

import styles from './AsideLayout.module.css'

export default function AsideLayout({data, children}) {
    const [isAsideOpen, setAsideOpen] = useState(false);
    useTransitionStopOnResize();

    return <>
        <Aside state={[isAsideOpen, setAsideOpen]} data={data} />

        <main className={styles.main + (isAsideOpen ? ' ' + styles.aside : '')}>
            {children}
        </main>
    </>
}
