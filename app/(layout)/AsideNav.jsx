import NavLink from '../../components/NavLink';

import styles from './AsideNav.module.css';

function AsideSectionLink({ href, onClick, disabled, children }) {
    if (!disabled) {
        return <NavLink href={href} activeClassName={styles.active} onClick={onClick}>
            {children}
        </NavLink>
    }
    else {
        return <span className={styles.disabled}>
            {children}
        </span>
    }
}

export default function AsideNav({ pages, groups, sections, currentPage, currentSection, closeAside }) {
    //const [currentPage, currentSection] = useCurrentPage();

    /*const currentPageIsInGroup = (group) => {
        return currentPage && group.id === currentPage.group.id;
    }*/

    const isInCurrentSection = (sectionSlug) =>
        currentSection && sectionSlug === currentSection.slug;
    
    const isInCurrentGroup = (groupSlug) =>
        currentPage && currentPage.group === groupSlug

    return <nav>
        <ul>
            {sections.map((section, index) =>
                <li key={section.slug}>
                    <AsideSectionLink href={`/${section.slug}`} onClick={closeAside} disabled={section.disabled}>
                        {`${process.env.sectionName} ${index + 1}`}
                    </AsideSectionLink>

                    {isInCurrentSection(section.slug) &&
                        <ul className={styles.sublist}>
                            {Object.entries(section.groups).map(([groupSlug, pageSlugs]) => (
                                <li key={groupSlug}>
                                    <span className={isInCurrentGroup(groupSlug) ? styles.active : ''}>
                                        {groups[groupSlug].label}
                                    </span>
                                    <ul className={styles.sublist}>
                                        {pageSlugs.map((pageSlug) => (
                                            <li key={pageSlug}>
                                                <NavLink href={`/${section.slug}/${pageSlug}`} onClick={closeAside} className={styles['page-link']} activeClassName={styles.active}>
                                                    {pages[pageSlug].title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            )}
        </ul>

        {/*currentSection && props.id === currentSection.id && (
            <ul className={ styles.sublist }>
                { Object.values(props.groups).map((group) => (
                    <li key={ group.id }>
                        <span className={ currentPageIsInGroup(group) ? styles.active : '' }>{ group.label }</span>
                        <ul className={ styles.sublist }>
                            { group.pages.map((page, i) => (
                                <li key={ i }>
                                    { page.component ? 
                                        <NavLink to={ `/${ props.id }/${ page.id }` } onClick={ props.closeAside } className={ styles['page-link'] } activeClassName={ styles.active }>
                                            { page.title }
                                        </NavLink> :
                                        <a href={ page.url } target="_blank" rel="noopener noreferrer" className={ styles['page-link'] }>{ page.title }</a>
                                    }
                                </li>
                            )) }
                        </ul>
                    </li>
                )) }
            </ul>
        )*/}
    </nav>
}
