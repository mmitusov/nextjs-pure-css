import buttonStyles from '@/styles/Button.module.css'

const Buttons = () => {
    return(
        <div>
            <p> <strong>Buttons lesson</strong> </p>
            <p className={buttonStyles.sectionDivider}>Buttons exercise:</p>
            <button className={buttonStyles['yt-button']}>YouTube</button>
            <button className={buttonStyles['join-button']}>JOIN</button>
            <button className={buttonStyles['tweet-button']}>Tweet overflowing text</button>
        </div>        
    )
}

export default Buttons