import thumStyles from '@/styles/youtubeCopy6.module.css'
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
import icon8 from "../../../public/youtube/icons/home.svg"
import icon9 from "../../../public/youtube/icons/explore.svg"
import icon10 from "../../../public/youtube/icons/subscriptions.svg"
import icon11 from "../../../public/youtube/icons/originals.svg"
import icon12 from "../../../public/youtube/icons/youtube-music.svg"
import icon13 from "../../../public/youtube/icons/library.svg"

//Useful CSS selector and syntax tips
// .sidebarButton img {}
// .sidebarButton div {}
// .searchButton:hover .hoverToolTip,
// .voiceSearchIconButton:hover .hoverToolTip,
// pointer-events: none; /* Чтобы отключить еффект :hover, так как без этого стиля наша подсказка будет загораться как при наведении на searchButton так и hoverToolTip */
// white-space: nowrap; /* Если текст слишком большой, то этот параметр делает так чтобы он отображался одной длинно строкой, а не слоистой структурой */

const YouTubeCopy6 = () => {
  return(
  <>
    <Head>
      <title>YouTube Copy</title>
      <meta name="description" content="YouTube Copy" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`${thumStyles.mainTag}`}>
      <p className={`${thumStyles.pTag}`}> <strong>Finishing with main elements - lesson</strong> </p>

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
            <div className={`${thumStyles.hoverToolTip}`}>Search</div> {/* Attaching "Show tips on hover" */}
          </button>
          <button className={`${thumStyles.voiceSearchIconButton}`}>
            <Image className={`${thumStyles.voiceSearchIcon}`} src={icon4} alt=''/>
            <div className={`${thumStyles.hoverToolTip}`}>Voice Search</div> {/* Attaching "Show tips on hover" */}
          </button>
        </div>
        <div className={`${thumStyles.headerRight1}`}>
          <div className={`${thumStyles.uploadButton}`} >
            <Image className={`${thumStyles.uploadIcon}`} src={icon5} alt=''/>
            <div className={`${thumStyles.hoverToolTip}`}>Upload video</div> {/* Attaching "Show tips on hover" */}
          </div>
          <div className={`${thumStyles.youtubeAppsButton}`} >
            <Image className={`${thumStyles.youtubeAppsIcon}`} src={icon6} alt=''/>
            <div className={`${thumStyles.hoverToolTip}`}>Your apps</div> {/* Attaching "Show tips on hover" */}
          </div>
          <div className={`${thumStyles.notificationsIconConteiner}`}> 
            <Image className={`${thumStyles.notificationsIcon}`} src={icon7} alt=''/>
            <div className={thumStyles.notificationsCount}>3</div>
            <div className={`${thumStyles.hoverToolTip}`}>Notifications</div> {/* Attaching "Show tips on hover" */}
          </div>
          <Image className={`${thumStyles.userPictureIcon}`} src={chanelIcon5} alt=''/>
        </div>
      </div>

      {/* Sidebar с использованием Fixed */}
      <div className={`${thumStyles.sidebar1}`}>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon8} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>Home</div>
        </div>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon9} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>Explore</div>
        </div>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon10} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>Subscriptions</div>
        </div>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon11} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>Originals</div>
        </div>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon12} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>YouTube Music</div>
        </div>
        <div className={`${thumStyles.sidebarButton}`}>
          <Image src={icon13} alt=''/>
          <div className={`${thumStyles.sidebarText}`}>Library</div>
        </div>
      </div>

      {/* Videos */}
      <div className={`${thumStyles.bigGridContainer}`}> 
        <div>
          <div className={thumStyles.thumbnailContainer}>
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>14:20</div>
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
          <div className={thumStyles.thumbnailContainer}>
            <Image className={thumStyles.thumbnail} src={thumbnail2} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>8:22</div>
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
          <div className={thumStyles.thumbnailContainer}>
            <Image className={thumStyles.thumbnail} src={thumbnail3} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>22:09</div> 
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
          <div className={thumStyles.thumbnailContainer}>
            <Image className={thumStyles.thumbnail} src={thumbnail4} alt=''/>
            <div className={thumStyles.thumbnailTimeStamp}>11:17</div> 
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

    </main>
  </>      
  )
}

export default YouTubeCopy6