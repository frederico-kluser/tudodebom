import React, { useState, useRef } from 'react';
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
        <source src="background-music.mp3" type="audio/mpeg" />
      </audio>

      <div style={{
        background: '#c0c0c0',
        border: '2px solid',
        borderColor: '#ffffff #808080 #808080 #ffffff',
        boxShadow: '1px 1px 0 0 #000000',
        width: '600px',
        maxWidth: '90vw'
      }}>
        <div style={{
          background: 'linear-gradient(to right, #000080, #1084d0)',
          color: 'white',
          padding: '3px 4px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          fontWeight: 'bold'
        }}>
          <span style={{ marginRight: '8px' }}>💕</span>
          <span style={{ flex: 1 }}>Tudo de Bom - Windows 95 Edition</span>
          <button style={{
            width: '18px',
            height: '18px',
            border: '1px solid',
            borderColor: '#ffffff #808080 #808080 #ffffff',
            background: '#c0c0c0',
            fontSize: '10px',
            cursor: 'pointer'
          }}>×</button>
        </div>

        <div style={{
          textAlign: 'center',
          padding: '20px',
          background: '#c0c0c0'
        }}>
          <div style={{
            border: '2px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            padding: '10px',
            marginBottom: '20px',
            display: 'inline-block',
            background: '#c0c0c0'
          }}>
            <img
              src="/camila.png"
              alt="Camila"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
              onError={(e) => {
                e.target.src = 'camila.png';
              }}
            />
          </div>

          <div style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            <h1 style={{
              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: '32px',
              margin: '10px 0',
              textShadow: '2px 2px 0px #808080',
              color: '#000080'
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

          <button
            onClick={toggleMusic}
            style={{
              fontSize: '14px',
              padding: '6px 20px',
              fontFamily: 'MS Sans Serif, sans-serif',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              cursor: 'pointer'
            }}
            onMouseDown={(e) => {
              e.target.style.borderColor = '#808080 #ffffff #ffffff #808080';
            }}
            onMouseUp={(e) => {
              e.target.style.borderColor = '#ffffff #808080 #808080 #ffffff';
            }}
          >
            {isPlaying ? '⏸️ Pausar Música' : '▶️ Tocar Música'}
          </button>

          <div style={{ marginTop: '20px' }}>
            <div style={{
              border: '2px solid',
              borderColor: '#808080 #ffffff #ffffff #808080',
              padding: '10px',
              background: '#000',
              color: '#0f0',
              fontFamily: 'monospace',
              textAlign: 'left'
            }}>
              <div>C:\WINDOWS\&gt; echo "Made with love"</div>
              <div style={{ animation: 'blink 1s infinite' }}>_</div>
            </div>
          </div>
        </div>
      </div>

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