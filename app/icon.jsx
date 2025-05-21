import { createIcon } from '@/utils/createImage';

export const dynamic = 'force-static';

const icons = [
    {
        id: 'small',
        contentType: 'image/png',
        size: { width: 32, height: 32 }
    },
    {
        id: 'large',
        contentType: 'image/png',
        size: { width: 192, height: 192 }
    },
]

export function generateStaticParams() {
    return icons.map(({ id }) => ({ '__metadata_id__': id }))
}

export function generateImageMetadata() {
    return icons;
}

export default async function Icon({ id }) {
    const icon = icons.find((icon) => icon.id === id)
    return createIcon(icon.size);
}