import appConfig from "@/app.config";
import capitalize from "@/utils/capitalize";
import { getSectionBySlug } from "@/model/section";
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
    const { section: slug } = await params;
    let section = await getSectionBySlug(slug);
    let index = slug.substring(appConfig.sectionName.length + 1)

    return await createOGImage(`${capitalize(appConfig.sectionName)} ${index} - ${section.title}`);
}
