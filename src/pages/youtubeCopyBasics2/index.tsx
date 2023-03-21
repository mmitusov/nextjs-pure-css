import thumStyles from '@/styles/youtubeCopy1.module.css'
import Head from 'next/head'
import Image from 'next/image'
import thumbnail1 from "../../../public/youtube/thumbnails/thumbnail-1.webp"
import thumbnail2 from "../../../public/youtube/thumbnails/thumbnail-2.webp"
import chanelIcon1 from "../../../public/youtube/chanelIcons/channel-1.jpeg"
import chanelIco2 from "../../../public/youtube/chanelIcons/channel-2.jpeg"

// //Из всех способов подгрузить шрифты точечно в конкретный файл, сработал пока только этот. Способ локально в css - указан в css
// import { Roboto } from '@next/font/google';

// export const robotoLight = Roboto({
//   subsets: ['latin'],
//   weight: ['100'],
// });

// <p className={`${robotoLight.className}`}>

//Даже если мы поменяем <div> Display property на inline-block, то он все равно будет занимать всю ширину контейнера
//Это происходит так как <div> в inline-block ориентации по дефолту имеет значение ширины в 100%, поэтому нужно не забывать это менять

//Стоит заметить, что если во вложеном inline-block <теге> сделать ширину больше его контейнера то он будет вываливаться за его пределы вместе со своим содержимым
//И если подобных контейнеров несколько то рядом их поставить не получиться и они будут идти один под одним, ведь так как он и так вываливается то слева и справа от него места под другие <теги> уже просто не остается
//Поэтому нужно следить за шириной контейнеров и там где не нужно лучше ее не задавать
//Пример с <р> тегом ниже ***

//По дефолту когда мы работаем с картинками в css - текст и другие елементы могут залазить на них (because by default img keep their original size), но в NexJS это вроде пока не наблюдалось
//Но чтобы этого избежать за пределами NexJS то нужно делать ширину картинки одинаковой с шириной родительского тега или 100% от родительского
//Тогда картинка не будет вылизать за пределы тега и на нее не будут залазить другие елементы

//Если мы указываем несколько стилей шрифтов через запятую, это называется - font stack
//Мы его используем для того, чтобы если самый первый по списку шрифт не загрузился/не стработал, то автоматически примениться следующий идущий за ним и т.д.

//Также стоит заметить что если двум рядом стоящим елементам указать margin, например в 50px, то расстояние меджу ними общее расстояние между ними будет на 100px, а все теже 50
//Это потому что в CSS, margin всегда накладывается друг на друга а не суммируется. И всегда отображается тот что больше
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
        <p> <strong>Using div as a container, nested layout technique/pro technique, fonts - lesson</strong> </p>
        <label>First name:</label>
        <input className={thumStyles.searchBar} type="text" placeholder='Search' />

        <div className={`${thumStyles.videoContainer1}`}>
          <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
          <div>
            <div className={thumStyles.profileIconConteiner}>
              <Image className={thumStyles.profileIcon} src={chanelIcon1} alt=''/>
            </div>                      
            <div className={thumStyles.videoContainerInside}>
              <p className={thumStyles.videoTitle}> {/* Пример с <р> тегом *** className={thumStyles.videoTitle1} - если вернуть стиль с заданой шириной то будет overflow*/}
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

        <div className={`${thumStyles.videoContainer1}`}>
          <Image className={thumStyles.thumbnail} src={thumbnail2} alt=''/>
          <div>
            <div className={thumStyles.profileIconConteiner}>
              <Image className={thumStyles.profileIcon} src={chanelIco2} alt=''/> 
            </div>
            <div className={thumStyles.videoContainerInside}>
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

      </main>
    </>      
    )
}

export default YouTubeCopy2