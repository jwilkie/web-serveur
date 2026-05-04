import { icons } from '@/model/icons';
import { createIcon } from '@/utils/createImage';

export const dynamic = 'force-static';

export function generateStaticParams() {
    return icons.map(({ id }) => ({ '__metadata_id__': id }))
}

export function generateImageMetadata() {
    return icons;
}

export default async function Icon({ id }) {
    const iconId = await id;
    const icon = icons.find((icon) => icon.id === iconId);
    return createIcon(icon.size);
}