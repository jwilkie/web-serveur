import createIcon from '@/utils/createImage';

export const dynamic = 'force-static';

export const size = {
    width: 192,
    height: 192
}

export const contentType = 'image/png';

export default async function Icon() {
    return await createIcon(size, 110);
}