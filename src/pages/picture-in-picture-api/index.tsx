// Есть несколько нюансов о которых нужно знать когда работаешь с PiP.
// 1. PiP работает только по HTTPS. Тоесть в режиме разработки нужно либо использовать тунели, либо же Next 14 уже имеет встроенную поддержку HTTPS
// 2. Чтобы запустить Next 14 в режиме HTTPS в package.json нужно указать скрипт: "dev": "next dev --experimental-https"
// Полезные ссылки
// https://medium.com/@pryvalov.bogddan/react-chat-widget-with-document-picture-in-picture-socket-io-f92d615bd4f8
// https://hackernoon.com/how-to-document-picture-in-picture-in-react-with-typescript
// https://developer.chrome.com/docs/web-platform/document-picture-in-picture?hl=ru
// https://w3c.github.io/picture-in-picture/#example-add-custom-pip-button
"use client"
import { useEffect, useState, ReactNode } from 'react';

// Alternative way of checking if is already renderd on client UI side
export function useClientWindow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return () => null;
  }
  return ({ children }: any ) => <>{children}</>;
}


export default function Home() {
  // After calling PiP mode save link to it
  const [pipWindow, setPipWindow] = useState<Window | null>(null);

  const openPiPWindow = async () => {
    try {
      // Check if the Document Picture-in-Picture API is supported
      if ('documentPictureInPicture' in window && pipWindow === null) {
        // Request the Picture-in-Picture window
        const pipWindow = await window.documentPictureInPicture.requestWindow({
          width: 400,
          height: 300,
        });
        setPipWindow(pipWindow)

        // Create a 'hello world' text element
        const helloWorldText = document.createElement('div');
        helloWorldText.textContent = 'Hello World!';
        
        // Append the 'hello world' text to the PiP window body
        pipWindow?.document?.body.appendChild(helloWorldText);
      } else {
        console.log('Document Picture-in-Picture API is not supported.');
      }
    } catch (error) {
      console.log('Error occurred while opening PiP window:', error);
    }
  };

  return (
    <main className={}>
      {/* Some other UI */}

      <useClienttestWindow>
        <h1>Simple PiP Window</h1>
        <button onClick={openPiPWindow}>Open PiP Window</button>
      </useClienttestWindow>
    </main>
  )
}
