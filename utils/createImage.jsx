import { join } from "node:path";
import appConfig from "@/app.config";
import acronym from '@/utils/acronym';
import { ImageResponse } from "next/og";
import { readFile } from 'node:fs/promises';

export async function createIcon(size, fontSize) {
    const data = await readFile('./styles/themes.css');
    const colors = data.toString().replace(/[\r \;]/g, '').split('\n')
        .filter((line) => line.includes('--bg-accent') || line.includes('--text-inverted-color'))
        .slice(0, 3).map((line) => line.split(':'))
        .reduce((colors, line) => ({ [line[0]]: line[1], ...colors }), {});

    const openSans = await readFile(
        join(process.cwd(), 'assets/OpenSans-Bold.ttf')
    )

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
        { 
            ...size,
            fonts: [
                {
                    name: 'OpenSans',
                    data: openSans,
                    style: "normal",
                    weight: 700
                }
            ]
        }
    )
}

export async function createOGImage(subTitle, pageTitle) {
    const data = await readFile('./styles/themes.css');
    const colors = data.toString().replace(/[\r \;]/g, '').split('\n')
        .filter((line) => line.includes('--bg-accent') || line.includes('--text-inverted-color'))
        .slice(0, 3).map((line) => line.split(':'))
        .reduce((colors, line) => ({ [line[0]]: line[1], ...colors }), {});

    const openSans = await readFile(
        join(process.cwd(), 'assets/OpenSans-Regular.ttf')
    )

    const openSansBold = await readFile(
        join(process.cwd(), 'assets/OpenSans-Bold.ttf')
    )

    return new ImageResponse(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
            height: '100%',
            padding: '3rem',
            color: colors['--text-inverted-color'],
            background: `linear-gradient(to bottom, ${colors['--bg-accent-color']}, ${colors['--bg-accent-gradient-color']} 70%);`,
            fontSize: '60px'
        }}>
            {/* Website title */}
            <div style={{
                borderBottom: `.5rem solid ${colors['--text-inverted-color']}`,
                fontWeight: '700'
            }}>
                {appConfig.title}
            </div>

            {/* Section or group title */}
            <div style={{ 
                display: 'flex',
                fontSize: `50px`
            }}>
                {subTitle || <span>&nbsp;</span>}
            </div>

            {/* Page title */}
            <div style={{ 
                display: 'flex',
                fontSize: `50px`
            }}>
                {pageTitle || <span>&nbsp;</span>}
            </div>
        </div>, 
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'OpenSans',
                    data: openSans,
                    style: 'normal',
                    weight: 400
                },
                {
                    name: 'OpenSans',
                    data: openSansBold,
                    style: 'normal',
                    weight: 700
                }
            ]
        }
    )
}
