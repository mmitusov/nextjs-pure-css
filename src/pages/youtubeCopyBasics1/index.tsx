import thumStyles from '@/styles/youtubeCopy.module.css'
import Head from 'next/head'
import Image from 'next/image'
import thumbnail1 from "../../../public/youtube/thumbnails/thumbnail-1.webp" 
//OR dirrectly <Image src='/youtube/thumbnail-1.webp' width="64" height="64" /> (But will result in Error: Image with src "/youtube/thumbnail-1.webp" is missing required "width" property.)

//There are 3 types of elements: 
//1. block element - takes up an entire line. e.g. <p> - by default is block element. И даже если мы зададим его внутренему елементу ширину, его маржа все равно будут занимать всю ширину страницы/контейнера в котором находяться
//2. inline-block element - only takes up as much space as needed to. e.g. <img>, <input> - by default are inline-block. Так как они не занимают всю ширину страницу/контейнера в котором находяться, то другие елементы могут распологаться сбоку от них
//3. inline element - appear within a line of text (=text element). e.g. <span>, <strong> - by default are inline.
//And in CSS we can use the Display property to switch between them - assign any of the elements to a diferent type (property). 
const YouTubeCopy1 = () => {
    return(
    <>
      <Head>
        <title>YouTube Copy</title>
        <meta name="description" content="YouTube Copy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <p> <strong>Image, Input, Elements Display property - lesson</strong> </p>
        <label>First name:</label>
        <input className={thumStyles.searchBar} type="text" placeholder='Search' />
        <Image className={thumStyles.thumbnail} src={thumbnail1} alt=''/>
        <p className={thumStyles.videoTitle}>
            Talking Tech <strong>and AI with</strong> Google CEO Sundar Pichai!
        </p>
        <p className={thumStyles.videoArtist}>
            Marques Brownlee
        </p>
        <p className={thumStyles.videoStats}>
            3.4M views &#183; 6 months ago
        </p>
      </main>
    </>      
    )
}

export default YouTubeCopy1