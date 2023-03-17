import textStyles from '@/styles/Text.module.css'


const Text = () => {
    return(
        <div>
            <p> <strong>Text lesson</strong> </p>
            <div>
                <p className={textStyles.sectionDivider}>Text exercise Chat-GPT:</p>
                <p className={`${textStyles.chatGptText1} ${textStyles.pTag}`}>Will CHAT-GPT 7 take over the world?</p> {/* <p> тег по дефолту имет мржу 14 px снизу и сверху. Нужно не забывать обнулять маржу */}
                <p className={`${textStyles.chatGptText2} ${textStyles.pTag}`}>3.5M views &#183; 6 month ago</p> {/* html entity for middle dot - &#183 */}
                <p className={`${textStyles.chatGptText3} ${textStyles.pTag}`}>MKBHD &#10003;</p> {/* Это то как передавать сразу несколько стилей в NextJS */}
            </div>

            <div>
                <p className={textStyles.sectionDivider}>Text exercise Apple:</p>
                <p className={`${textStyles[`apple-text1`]} ${textStyles.pTag}`}> {/* Символы как '>' лучше создавать при помощи html entity, а то наша среда возможно может спутать его с незакрытым HTML тегом*/}
                    Pay with everything you have for a new overprised Apple product. <span className={textStyles.spanUnderline}>Give us money now &#62;</span> {/* Подобная стилистическая логика для текста как '<u>' внутри другого тега называется - text element */}
                </p> {/* '<span>' text element в отличии от других не имеет презаданных стилей. Поэтому если мы хотим что-то кастомное, лучше использовать его */}
            </div>
        </div>        
    )
}

export default Text