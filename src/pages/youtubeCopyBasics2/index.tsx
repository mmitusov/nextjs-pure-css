import thumStyles from '@/styles/youtubeCopy.module.css'
import Head from 'next/head'
import Image from 'next/image'
import thumbnail1 from "../../../public/youtube/thumbnails/thumbnail-1.webp"
import thumbnail2 from "../../../public/youtube/thumbnails/thumbnail-2.webp"
import chanelIcon1 from "../../../public/youtube/chanelIcons/channel-1.jpeg"

//Даже если мы поменяем <div> Display property на inline-block, то он все равно будет занимать всю ширину контейнера
//Это происходит так как <div> в inline-block ориентации по дефолту имеет значение ширины в 100%, поэтому нужно не забывать это менять

//Стоит заметить, что если во вложеном inline-block <теге> сделать ширину больше его контейнера то он будет вываливаться за его пределы вместе со своим содержимым
//И если подобных контейнеров несколько то рядом их поставить не получиться и они будут идти один под одним, ведь так как он и так вываливается то слева и справа от него места под другие <теги> уже просто не остается
//Поэтому нужно следить за шириной контейнеров и там где не нужно лучше ее не задавать
//Пример с <р> тегом ниже ***

//По дефолту когда мы работаем с картинками в css - текст и другие елементы могут залазить на них (because by default img keep their original size), но в NexJS это вроде пока не наблюдалось
//Но чтобы этого избежать за пределами NexJS то нужно делать ширину картинки одинаковой с шириной родительского тега или 100% от родительского
//Тогда картинка не будет вылизать за пределы тега и на нее не будут залазить другие елементы
const YouTubeCopy2 = () => {
    return(
    <>
      <Head>
        <title>YouTube Copy</title>
        <meta name="description" content="YouTube Copy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p> <strong>Using div as a container, nested layout technique/pro technique - lesson</strong> </p>
        <label>First name:</label>
        <input className={thumStyles.searchBar} type="text" placeholder='Search' />

        <div className={thumStyles.videoContainer1}>          
            <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
              <div className={thumStyles.profileIconConteiner} >
                <Image className={thumStyles.profileIcon} src={chanelIcon1} alt=''/>
              </div>             
                      
              <div className={thumStyles.videoContainerInside}>
                <p> {/* Пример с <р> тегом *** className={thumStyles.videoTitle} - если вернуть стиль с заданой шириной то будет overflow*/}
                    Talking Tech <strong>and AI with</strong> Google CEO Sundar Pichai!
                </p>
                <p>
                    Marques Brownlee
                </p>
                <p>
                    3.4M views &#183; 6 months ago
                </p>
              </div>         
        </div>

        <div className={thumStyles.videoContainer1}>
          <Image className={thumStyles.thumbnail} src={thumbnail2} alt=''/>
          <p className={thumStyles.videoTitle}>
              Try Not To Laugh Challenge #9
          </p>
          <p className={thumStyles.videoArtist}>
              Markiplier
          </p>
          <p className={thumStyles.videoStats}>
              19M views &#183; 4 years ago
          </p>
        </div>

      </main>
    </>      
    )
}

export default YouTubeCopy2