import createIcon from '@/utils/createImage';

export const dynamic = 'force-static';

export const size = {
    width: 32,
    height: 32
}

export const contentType = 'image/png';

export default async function Icon() {
    return await createIcon(size, 18);
}