import Head from 'next/head'
import { Inter } from 'next/font/google'
import initialStyles from '@/styles/Home.module.css'
import buttonStyles from '@/styles/Button.module.css'
import textStyles from '@/styles/Text.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={initialStyles.main}>

        <div>
          <p className={buttonStyles.sectionDivider}>Buttons exercise:</p>
          <button className={buttonStyles['yt-button']}>YouTube</button>
          <button className={buttonStyles['join-button']}>JOIN</button>
          <button className={buttonStyles['tweet-button']}>Tweet overflowing text</button>
        </div>

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

      </main>
    </>
  )
}
