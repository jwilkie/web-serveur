import { createOGImage } from "@/utils/createImage";

export const dynamic = 'force-static';

export { generateStaticParams } from '../page';

export async function GET() {
    return createOGImage();
}