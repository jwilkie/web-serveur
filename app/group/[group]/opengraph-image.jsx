import appConfig from "@/app.config";
import { getGroupBySlug } from "@/model/group";
import { createOGImage } from '@/utils/createImage';

export const dynamic = 'force-static';

export const alt = appConfig.title;

export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png';

export { generateStaticParams } from './page';

export default async function Image({params}) {
    const { group: slug } = await params;
    const group = await getGroupBySlug(slug);

    return await createOGImage(group.title);
}
