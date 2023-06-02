import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { basePath } from '@/next.config';

export default function useCleanPathname() {
    const pathname = usePathname();
    
    const getCleanPathname = () => {
        let cleanPathname = pathname;

        // Remove basepath
        if(basePath) {
            cleanPathname = cleanPathname.substring(basePath.length);
        }

        // Remove trailing slash
        if(cleanPathname.at(-1) === '/'){
            cleanPathname = cleanPathname.substring(0, cleanPathname.length - 1);
        }

        return cleanPathname;
    }

    const [pathnameWithoutBasepath, setPathnameWithoutBasepath] = useState(getCleanPathname());

    useEffect(() => {
        setPathnameWithoutBasepath(getCleanPathname())
    }, [pathname]);

    return pathnameWithoutBasepath;
}
