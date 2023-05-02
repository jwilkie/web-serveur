import { montserrat } from '../styles/fonts';
import styles from '../styles/Bubble.module.css';

export default function Bubble({ name, number }) {
    const formatUnsignedInt = (number, size) => 
        ('0'.repeat(size - 1) + (number)).slice(-size);

    return  <div className={styles.bubble + ' ' + montserrat.className}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{formatUnsignedInt(number, 2)}</span>
    </div>
}
