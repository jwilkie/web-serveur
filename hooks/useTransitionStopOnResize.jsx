import { useEffect } from 'react'
import useWindowSize from './useWindowSize';

export default function useTransitionStopOnResize() {
    const { windowResizing } = useWindowSize();

    useEffect(() => {
        document.body.classList.toggle('resizing', windowResizing);
    }, [windowResizing])
}