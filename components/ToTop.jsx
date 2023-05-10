import usePageOverflow from '@/hooks/usePageOverflow';

import styles from './ToTop.module.css'

export default function ToTop() {
    /**
     * Variable indicating whether the the page is overflowing or not.
     */
    const isPageOverflowing = usePageOverflow(1.5)

    /**
     * Scroll back to the top of the page smoothly.
     */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div className={styles.container}>
        <button 
            className={styles.button + (!isPageOverflowing ? ' ' + styles.hidden : '')} 
            title="Défiler vers le haut" 
            onClick={scrollToTop}>
            <i className={ styles.arrow }></i>
        </button>
    </div>
}
