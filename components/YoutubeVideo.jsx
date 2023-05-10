import styles from './YoutubeVideo.module.css'

export default function YoutubeVideo({title, src}) {
    return <div className={ styles.video }>
        <div>
            <iframe 
                title={ title }
                src={ src }
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    </div>
}
