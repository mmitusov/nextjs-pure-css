import thumStyles from '@/styles/youtubeCopy3.module.css'
import Head from 'next/head'
import Image from 'next/image'
import thumbnail1 from "../../../public/youtube/thumbnails/thumbnail-1.webp"
import thumbnail2 from "../../../public/youtube/thumbnails/thumbnail-2.webp"
import thumbnail3 from "../../../public/youtube/thumbnails/thumbnail-3.webp"
import thumbnail4 from "../../../public/youtube/thumbnails/thumbnail-4.webp"
import chanelIcon1 from "../../../public/youtube/chanelIcons/channel-1.jpeg"
import chanelIcon2 from "../../../public/youtube/chanelIcons/channel-2.jpeg"
import chanelIcon3 from "../../../public/youtube/chanelIcons/channel-3.jpeg"
import chanelIcon4 from "../../../public/youtube/chanelIcons/channel-4.jpeg"

//Проблема со стандартным 'display: inline-block;' в том, что в таком случае елементы к которому он применен имеют неточности в позиционировании: даже при 0й марже все равно остаються небольшие отступы вокруг елемента
//Причина этого - если в нашем коде мы отделяем наши теги пробелом или новой строкой '<div>.....<div>', то эти пробелы отображаются как екстра отступы в нашем UI
//И если мы поставим эти два тега вплотную '<div><div>', то эти отступы пропадут. Но для нас код станет менее читабельным
//Также использую 'display: inline-block;' - сложно ровнять елементы
//P.S. Это касается класической связки CSS+HTML. Но я заметил, что используя Next.js пока таких проблем не возникало
//И как решение этого всего - мы можем использовать CSS Grid

//Grid лексика: 
//1fr - за  мет все оставшиеся свободное место. Если мы успользуем 2 столбца по 1fr - место будет разделено медну ними 50/50 (задаем соотношение). Если 1fr+3fr, то - 25/75 и т.д.
//grid-template-columns, column-gap, row-gap
const YouTubeCopy3 = () => {
    return(
    <>
      <Head>
        <title>YouTube Copy</title>
        <meta name="description" content="YouTube Copy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p> <strong>CSS Grid - lesson</strong> </p>
        
        <div className={`${thumStyles.bigGridContainer}`}>
          <div> {/* Больше не нужен className={`${thumStyles.videoContainer}`} */}
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
            <div className={thumStyles.gridStyle}> {/* Добавили Grid вместо inline-block*/}
              <div> {/* Больше не нужен className={thumStyles.profileIconConteiner} */}
                <Image className={thumStyles.profileIcon} src={chanelIcon1} alt=''/>
              </div>                      
              <div> {/* Больше не нужен className={thumStyles.videoContainerInside} */}
                <p className={thumStyles.videoTitle}>
                    Talking Tech and AI with Google CEO Sundar Pichai!
                </p>
                <p className={thumStyles.videoAuthor}>
                    Marques Brownlee
                </p>
                <p className={thumStyles.videoStats}>
                    3.4M views &#183; 6 months ago
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image className={thumStyles.thumbnail} src={thumbnail2} alt=''/>
            <div className={thumStyles.gridStyle}>
              <div>
                <Image className={thumStyles.profileIcon} src={chanelIcon2} alt=''/> 
              </div>
              <div>
                <p className={`${thumStyles.videoTitle}`}>
                    Try Not To Laugh Challenge #9
                </p>
                <p className={thumStyles.videoAuthor}>
                    Markiplier
                </p>
                <p className={thumStyles.videoStats}>
                    19M views &#183; 4 years ago
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image className={thumStyles.thumbnail} src={thumbnail3} alt=''/>
            <div className={thumStyles.gridStyle}> {/* Добавили Grid вместо inline-block*/}
              <div> {/* Больше не нужен className={thumStyles.profileIconConteiner} */}
                <Image className={thumStyles.profileIcon} src={chanelIcon3} alt=''/>
              </div>                      
              <div> {/* className={thumStyles.videoContainerInside} */}
                <p className={thumStyles.videoTitle}>
                    Talking Tech and AI with Google CEO Sundar Pichai!
                </p>
                <p className={thumStyles.videoAuthor}>
                    Marques Brownlee
                </p>
                <p className={thumStyles.videoStats}>
                    3.4M views &#183; 6 months ago
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image className={thumStyles.thumbnail} src={thumbnail4} alt=''/>
            <div className={thumStyles.gridStyle}>
              <div>
                <Image className={thumStyles.profileIcon} src={chanelIcon4} alt=''/> 
              </div>
              <div>
                <p className={`${thumStyles.videoTitle}`}>
                    Try Not To Laugh Challenge #9
                </p>
                <p className={thumStyles.videoAuthor}>
                    Markiplier
                </p>
                <p className={thumStyles.videoStats}>
                    19M views &#183; 4 years ago
                </p>
              </div>
            </div>
          </div>
        </div>



{/* Разные примеры использования Grid. Подгонять под Next.js было лень */}
        <p> <strong>Разные примеры использования Grid. Подгонять под Next.js было лень</strong> </p>

        <div className="
          display: grid;
          grid-template-columns: 100px 100px;
        ">
          <div className="background-color: lightblue;">div 1</div>
          <div className="background-color: lightpink;">div 2<p>text</p></div>
        </div>

        <div className="
          margin-top: 30px;
          display: grid;
          grid-template-columns: 100px 100px 200px;
        ">
          <div className="background-color: lightblue;">100px</div>
          <div className="background-color: lightpink;">100px<p>text</p></div>
          <div className="background-color: lightblue;">200px</div>
          <div className="background-color: lightpink;">100px</div>
        </div>

        <div className="
          margin-top: 30px;
          display: grid;
          grid-template-columns: 100px 1fr;
        ">
          <div className="background-color: lightblue;">100px</div>
          <div className="background-color: lightpink;">1fr</div>
        </div>

        <div className="
          margin-top: 30px;
          display: grid;
          grid-template-columns: 100px 1fr 2fr;
        ">
          <div className="background-color: lightblue;">100px</div>
          <div className="background-color: lightpink;">1fr</div>
          <div className="background-color: lightblue;">2fr</div>
        </div>

        <p> <strong>Подогнал под Next.js только эту часть</strong> </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '20px',
          rowGap: '40px',
          marginTop: '30px',
          marginBottom: '100px',
        }}>
          <div style={{backgroundColor: 'lightblue', height: '200px'}}>1fr</div>
          <div style={{backgroundColor: 'lightpink', height: '200px'}}>1fr</div>
          <div style={{backgroundColor: 'lightblue', height: '200px'}}>1fr</div>
          <div style={{backgroundColor: 'lightpink', height: '200px'}}>1fr</div>
          <div style={{backgroundColor: 'lightblue', height: '200px'}}>1fr</div>
          <div style={{backgroundColor: 'lightpink', height: '200px'}}>1fr</div>
        </div>
      </main>
    </>      
    )
}

export default YouTubeCopy3