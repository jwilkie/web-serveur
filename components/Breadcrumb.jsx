import Link from 'next/link'
import useCurrentPage from '@/hooks/useCurrentPage'

import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ sections, groups }) {
    let { currentSection, currentGroup, currentPage } = useCurrentPage(sections, groups);

    const getPath = () => {
        if(currentSection) {
            return `/${currentSection.slug}`;
        }
        else if(currentGroup) {
            return `/group/${currentGroup.slug}`;
        }
        else {
            return null;
        }
    }

    const getTitle = () => {
        if(currentSection) {
            return currentSection.title;
        }
        else if(currentGroup) {
            return currentGroup.label;
        }
        else {
            return null;
        }
    }

    return currentPage && <nav className={styles.breadcrumb}>
        <span>
            <Link href={getPath()}>
                {getTitle()}
            </Link>
            <span className={styles.separator}>&gt;</span>
        </span>

        {currentSection &&
            <span>
                {groups[currentPage.group].label}
                <span className={styles.separator}>&gt;</span>
            </span>
        }

        <span>
            {currentPage.title}
        </span>
    </nav>
}