import buttonStyles from '@/styles/Button.module.css'

// A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). 
// For example, the pseudo-class :hover can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

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