import thumStyles from '@/styles/youtubeCopy5.module.css'
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
import chanelIcon5 from "../../../public/youtube/chanelIcons/my-channel.jpeg"
import icon1 from "../../../public/youtube/icons/hamburger-menu.svg"
import icon2 from "../../../public/youtube/icons/youtube-logo.svg"
import icon3 from "../../../public/youtube/icons/search.svg"
import icon4 from "../../../public/youtube/icons/voice-search-icon.svg"
import icon5 from "../../../public/youtube/icons/upload.svg"
import icon6 from "../../../public/youtube/icons/youtube-apps.svg"
import icon7 from "../../../public/youtube/icons/notifications.svg"

//1. Static - дефолтное состояние всех елементов. Означает, что мы просто следуем потоку порядка расположения наших елементов
//2. Realative - похож на Static, но также позволяет менять top, left, bottom и right параметры, относительно (realative to) его нормального местоположения на странице (его Static положения)
//И при перемещении елементов с Realative, у нас может возникнуть overflow, так как в этом случае наш елемент как бы выходит из document flow, и не может влиять на другие елементы
//3. Absolute - полностью уберает елемент из document flow, и страница рендерится так как будто этот елемент и не существует.
//При чем елемент будет позиционироваться относительно начальных координат позиции своего родителя. 
//А если и у родителя отсутствует позиционирование (оно = Static), то от позиции родитель-родителя и т.д. до самого <html>. Кстати Absolute часто используется в связке с Realative, гед Realative служит начальной точкой
//Имеет свойства: top, left, bottom, right.
//P.S. Не забываем указывать background-color, ведь когда наш елемент выходит из document flow он становиться прозрачным
//4. Fixed - как и в Absolute полностью уберает елемент из document flow. Но вот только позиционирование всегда идет от самого <html> игнорируя позиции всех других елементов
// И в отличии от Absolute - елемент всегда остается на экране даже во время пролистывания страницы. 
//Имеет свойства: top, left, bottom, right. И если мы одновременно задаем противоположные позиции (left-right) - то мы расстягиваем наш елемент между этих позиций
//Но если не задавать свойства вообще, то елмент просто будет паспологаться поверх своего родителя, а не сразу относительно начальных <html> координат
//P.S. Не забываем указывать background-color, ведь когда наш елемент выходит из document flow он становиться прозрачным 
//Sticky = Realative + Fixed.
//Если мы хотим расположить один елемент поверх другого - для этого нам также нужно использовать CSS Position
//P.S. Не забываем указывать background-color, ведь когда наш елемент выходит из document flow он становиться прозрачным

//Стоит заметить, что при позиционировании, елементы в самом конце <html> будут отображены на более переднем плане нежели елементы, что идут выше
//Чтобы влиять на это поведение мы можем использовать праметр - 'z-index'
//'z-index' determin which element apeears in front and which appear behind. Чем выше 'z-index', тем тем более передний план будут занимать елемент
//В случае если мы его не указываем, то дефолтное значение 'z-index' = 0.

const YouTubeCopy5 = () => {
  return(
  <>
    <Head>
      <title>YouTube Copy</title>
      <meta name="description" content="YouTube Copy" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`${thumStyles.mainTag}`}>
      <p className={`${thumStyles.pTag}`}> <strong>CSS Position - lesson</strong> </p>

      {/* Header с использованием Fixed */}
      <div className={`${thumStyles.header1}`}>
        <div className={`${thumStyles.headerLeft1}`}>
          <Image className={`${thumStyles.hamburgerMenu}`} src={icon1} alt=''/>
          <Image className={`${thumStyles.youtubeLogo}`} src={icon2} alt=''/>
        </div>
        <div className={`${thumStyles.headerCenter1}`}>
          <input className={`${thumStyles.searchBar}`} placeholder='Search'/>
          <button className={`${thumStyles.searchButton}`}>
            <Image className={`${thumStyles.search}`} src={icon3} alt=''/>
          </button>
          <button className={`${thumStyles.voiceSearchIconButton}`}>
            <Image className={`${thumStyles.voiceSearchIcon}`} src={icon4} alt=''/>
          </button>
        </div>
        <div className={`${thumStyles.headerRight1}`}>
          <Image className={`${thumStyles.uploadIcon}`} src={icon5} alt=''/>
          <Image className={`${thumStyles.youtubeAppsIcon}`} src={icon6} alt=''/>
          <div className={`${thumStyles.notificationsIconConteiner}`}> {/* Создаем Realative контейнер, просто чтобы отпозиционировать дочерний Absolute */}
            <Image className={`${thumStyles.notificationsIcon}`} src={icon7} alt=''/>
            <div className={thumStyles.notificationsCount}>3</div> {/* Описываем то как дочерний Absolute будет располагаться внутри контейнера Realative */}
          </div>
          <Image className={`${thumStyles.userPictureIcon}`} src={chanelIcon5} alt=''/>
        </div>
      </div>

      {/* Sidebar с использованием Fixed */}
      <div className={`${thumStyles.sidebar1}`}>
        <div className={`${thumStyles.sidebarLogo1}`}>
          Hey
        </div>
      </div>

      {/* Videos */}
      <div className={`${thumStyles.bigGridContainer}`}> 
        <div>
          <div className={thumStyles.thumbnailContainer}> {/* Создаем Realative контейнер, просто чтобы отпозиционировать дочерний Absolute */}
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>14:20</div> {/* Описываем то как дочерний Absolute будет располагаться внутри контейнера Realative */}
          </div>
          <div className={thumStyles.gridStyle}>
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
          <div className={thumStyles.thumbnailContainer}> {/* Создаем Realative контейнер, просто чтобы отпозиционировать дочерний Absolute */}
            <Image className={thumStyles.thumbnail} src={thumbnail2} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>8:22</div>  {/* Описываем то как дочерний Absolute будет располагаться внутри контейнера Realative */}
          </div>
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
          <div className={thumStyles.thumbnailContainer}> {/* Создаем Realative контейнер, просто чтобы отпозиционировать дочерний Absolute */}
            <Image className={thumStyles.thumbnail} src={thumbnail3} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>22:09</div>  {/* Описываем то как дочерний Absolute будет располагаться внутри контейнера Realative */}
          </div>
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
          <div className={thumStyles.thumbnailContainer}> {/* Создаем Realative контейнер, просто чтобы отпозиционировать дочерний Absolute */}
            <Image className={thumStyles.thumbnail} src={thumbnail4} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>11:17</div>  {/* Описываем то как дочерний Absolute будет располагаться внутри контейнера Realative */}
          </div>
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



{/* Разные примеры использования CSS Position - fixed */}

<p> <strong>Подогнал под Next.js только эту часть</strong> </p>
      <div style={{
        height: '500px',
        marginTop: '30px',
        marginBottom: '100px',
        backgroundColor: 'grey',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingBottom: '40px'
      }}>
        Parent
        <div style={{position: 'fixed', left: '40px', right: '40px', height: '700px', backgroundColor: 'green'}}>div1</div>
        <div style={{backgroundColor: 'lightpink', height: '100px'}}>div2</div>
        <div style={{backgroundColor: 'lightblue', height: '100px'}}>div3</div>
      </div>

      {/* <div style={{
        height: '3000px',
        paddingTop: '60px',
        paddingLeft: '80px',
      }}>
        <div style={{
          backgroundColor: 'black',
          color: 'white',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '50px'
        }}>
          header
        </div>

        <div style={{
          backgroundColor: 'green',
          color: 'white',
          position: 'fixed',
          top: '50px',
          left: '0',
          right: '0',
          width: '72px'
        }}>
          sidebar
        </div>

        <div style={{
          backgroundColor: 'lightblue',
          height: '200px',
          width: '200px',
          position: 'static'
        }}>div 1</div>
        <div style={{
          backgroundColor: 'lightpink',
          height: '200px',
          width: '200px'
        }}>div 2</div>
      </div> */}

    </main>
  </>      
  )
}

export default YouTubeCopy5