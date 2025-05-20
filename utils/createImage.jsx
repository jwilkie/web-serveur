import appConfig from "@/app.config";
import acronym from '@/utils/acronym';
import { ImageResponse } from "next/og";
import { readFile } from 'node:fs/promises';

export default async function createIcon(size, fontSize) {
    const data =  await readFile('./styles/themes.css');
    const colors = data.toString().replace(/[\r \;]/g, '').split('\n')
        .filter((line) => line.includes('--bg-accent') || line.includes('--text-inverted-color'))
        .slice(0, 3).map((line) => line.split(':'))
        .reduce((colors, line) => ({ [line[0]]: line[1], ...colors }), {});

    return new ImageResponse(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            color: colors['--text-inverted-color'],
            background: `linear-gradient(to bottom, ${colors['--bg-accent-color']}, ${colors['--bg-accent-gradient-color']} 70%);`,
            fontSize: `${fontSize}px`
        }}>
            {acronym(appConfig.title)}
        </div>, 
        { ...size }
    )
}