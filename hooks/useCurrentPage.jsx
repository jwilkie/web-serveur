import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * 
 * @param {Array<Section>} sections 
 */
export default function useCurrentPage(sections) {
    let pageSlug = useState(null);
    let sectionSlug = useState(null);
    let { pathname } = useRouter();

    /**
     * 
     * @param {string} pathname 
     * @returns 
     */
    const getCurrentSection = (pathname) => {
        let slashPosition = pathname.indexOf('/', 1);
        let sectionSlug = pathname.substring(1, slashPosition !== -1 ? slashPosition : undefined);
        let section = sections.find((section) => section.slug === sectionSlug);
        return (section ? sectionSlug : null);
    }

    /**
     * 
     * @param {string} pathname 
     * @returns 
     */
    const getCurrentPage = (pathname) => {
        let slashPosition = pathname.indexOf('/', 1);
        let pageSlug = pathname.substring(slashPosition + 1) || null;
        return pageSlug;
    }

    useEffect(() => {

    }, [pathname]);
}