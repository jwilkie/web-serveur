import appConfig from "@/app.config";
import { createOGImage } from '@/utils/createImage';

export const dynamic = 'force-static';

export const alt = appConfig.title;

export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png';

export default async function Image() {
    return await createOGImage();
}
