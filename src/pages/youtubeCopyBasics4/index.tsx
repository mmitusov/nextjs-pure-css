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

//Flexbox так же как и Grid решает проблему с 'display: inline-block;'
//Но в отличии от Grid, используся Flexbox мы не задаем параметры расположения елментов в родительском контейнере
//В родительском контейнере мы только указываем, что это будет Flexbox и его направление - горизонтальное или вертикальное
//А сами параметры расположения елментов мы уже задаем в самих елементах
//И тем самым Flexbox намного более гибкий в тех случаях когда лейаут и кол-во елементов в контейнере может постоянно меняться

//Работае с Flexbox стоит заметить, что центровка елементов (начало, центр, конец) прописывается не в каждом отдельном елементе, а в родительском елементе и после чего уже применяеться ко всем дочерним

//GrFlexboxid лексика: 
//'flex:1', это аналог '1fr' в Grid - займет все оставшиеся свободное место. Если мы успользуем 2 столбца по 1 - место будет разделено медну ними 50/50 (задаем соотношение). Если 1+3, то - 25/75 и т.д.
//flex-direction: row, width: 100%, flex: 1, justify-content: top/end/space-between/... (горизонтальная центровка), align-items: stretch/top... (вертикальная центровка), column-gap, row-gap,
const YouTubeCopy4 = () => {
    return(
    <>
      <Head>
        <title>YouTube Copy</title>
        <meta name="description" content="YouTube Copy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p> <strong>CSS Flexbox - lesson</strong> </p>
        
        <div className={`${thumStyles.bigGridContainer}`}>
          <div>
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
            <div className={thumStyles.gridStyle}> {/* Добавили Grid вместо inline-block*/}
              <div>
                <Image className={thumStyles.profileIcon} src={chanelIcon1} alt=''/>
              </div>                      
              <div>
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
            <div className={thumStyles.gridStyle}>
              <div>
                <Image className={thumStyles.profileIcon} src={chanelIcon3} alt=''/>
              </div>                      
              <div>
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



{/* Разные примеры использования Flexbox */}
        {/* <div style="
          display: flex;
          flex-direction: row;
        ">
          <div style="background-color: lightblue;">div 1 text</div>
          <div style="background-color: lightpink;">div 2 <p>text</p></div>
        </div>

        <div style="
          margin-top: 30px;
          display: flex;
          flex-direction: row;
        ">
          <div style="
            background-color: lightblue;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightpink;
            flex: 1;
          ">flex: 1</div>
        </div>

        <div style="
          margin-top: 30px;
          display: flex;
          flex-direction: row;
        ">
          <div style="
            background-color: lightblue;
            flex: 1;
          ">flex: 1</div>
          <div style="
            background-color: lightpink;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightblue;
            flex: 2;
          ">flex: 2</div>
        </div>

        <div style="
          margin-top: 30px;
          height: 70px;
          border-width: 1px;
          border-style: solid;
          border-color: gray;
          display: flex;
          flex-direction: row;
          justify-content: center;
        ">
          <div style="
            background-color: lightblue;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightpink;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightblue;
            width: 100px;
          ">100px</div>
        </div>

        <div style="
          margin-top: 30px;
          height: 70px;
          border-width: 1px;
          border-style: solid;
          border-color: gray;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        ">
          <div style="
            background-color: lightblue;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightpink;
            width: 100px;
          ">100px</div>
          <div style="
            background-color: lightblue;
            width: 100px;
          ">100px</div>
        </div> */}

<p> <strong>Подогнал под Next.js только эту часть</strong> </p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray',
          height: '70px',
          marginTop: '30px',
          marginBottom: '100px',
        }}>
          <div style={{backgroundColor: 'lightblue', width: '100px'}}>100px</div>
          <div style={{backgroundColor: 'lightpink', width: '100px'}}>100px</div>
          <div style={{backgroundColor: 'lightblue', width: '100px'}}>100px</div>
        </div>
      </main>
    </>      
    )
}

export default YouTubeCopy4