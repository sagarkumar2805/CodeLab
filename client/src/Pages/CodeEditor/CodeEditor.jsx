import React, { useEffect, useRef } from 'react'

  
const CodeEditor = () => {
    const iframeRef = useRef(null);

    const openFullscreen = () => {
      const iframe = iframeRef.current;
  
      if (iframe) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
          iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
          iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
          iframe.msRequestFullscreen();
        }
      }
    };
    useEffect(()=>{
        openFullscreen()
    })
    return (
      <div>

        <iframe ref={iframeRef} src={"https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_python"} height={"1080px"} width={"1750px"}></iframe>
      </div>
    );
}

export default CodeEditor