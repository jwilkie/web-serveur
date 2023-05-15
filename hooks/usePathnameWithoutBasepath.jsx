import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { basePath } from '@/next.config';

export default function usePathnameWithoutBasepath() {
    const pathname = usePathname();
    
    const getPathnameWithoutBasepath = () => {
        if(basePath) {
            return pathname.substring(basePath.length);
        }

        return pathname;
    }

    const [pathnameWithoutBasepath, setPathnameWithoutBasepath] = useState(getPathnameWithoutBasepath());

    useEffect(() => {
        setPathnameWithoutBasepath(getPathnameWithoutBasepath())
    }, [pathname]);

    return pathnameWithoutBasepath;
}
