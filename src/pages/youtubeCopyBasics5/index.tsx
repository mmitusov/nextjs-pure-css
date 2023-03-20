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

const YouTubeCopy5 = () => {
    return(
    <>
      <Head>
        <title>YouTube Copy</title>
        <meta name="description" content="YouTube Copy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p> <strong>CSS Position - lesson</strong> </p>

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
            <Image className={`${thumStyles.notificationsIcon}`} src={icon7} alt=''/>
            <Image className={`${thumStyles.userPictureIcon}`} src={chanelIcon5} alt=''/>
          </div>
        </div>

        <div className={`${thumStyles.bigGridContainer}`}>
          <div>
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
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

export default YouTubeCopy5