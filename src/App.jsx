import React, { useState, useRef } from 'react';
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Frame,
  TitleBar
} from '@react95/core';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#008080',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      <Window style={{ width: '600px', maxWidth: '90vw' }}>
        <TitleBar
          active={true}
          icon={<span>💕</span>}
          title="Tudo de Bom - Windows 95 Edition"
        />
        <WindowContent style={{
          textAlign: 'center',
          padding: '20px',
          background: '#c0c0c0'
        }}>
          <Frame
            style={{
              padding: '10px',
              marginBottom: '20px',
              display: 'inline-block'
            }}
          >
            <img
              src="/camila.png"
              alt="Camila"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Frame>

          <div style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            <h1 style={{
              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: '32px',
              margin: '10px 0',
              textShadow: '2px 2px 0px #000',
              color: '#fff'
            }}>
              TUDO DE BOM
            </h1>

            <div style={{
              fontSize: '24px',
              animation: 'blink 1s infinite'
            }}>
              ❤️
            </div>
          </div>

          <Button
            onClick={toggleMusic}
            style={{
              fontSize: '16px',
              padding: '10px 20px'
            }}
          >
            {isPlaying ? '⏸️ Pausar Música' : '▶️ Tocar Música'}
          </Button>

          <div style={{ marginTop: '20px' }}>
            <Frame
              style={{
                padding: '10px',
                background: '#000',
                color: '#0f0',
                fontFamily: 'monospace',
                textAlign: 'left'
              }}
            >
              <div>C:\WINDOWS\&gt; echo "Made with love"</div>
              <div style={{ animation: 'blink 1s infinite' }}>_</div>
            </Frame>
          </div>
        </WindowContent>
      </Window>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;