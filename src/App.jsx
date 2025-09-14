import React, { useState, useRef } from 'react';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);
  const terminalInputRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim();

    if (command) {
      setTerminalHistory([...terminalHistory, `C:\\WINDOWS> ${command}`]);

      const lowerCommand = command.toLowerCase();

      if (lowerCommand === 'fred') {
        setShowPopup(true);
        setTerminalHistory(prev => [...prev, 'Executando comando especial...']);
      } else if (lowerCommand === 'gui' || lowerCommand === 'guilherme') {
        setShowPopup(true);
        setTerminalHistory(prev => [...prev, 'Executando comando especial...']);
      } else if (lowerCommand === 'help') {
        setTerminalHistory(prev => [...prev,
          '',
          'Comandos disponíveis:',
          '  help      - Mostra esta lista de comandos',
          '  fred      - Comando especial do Fred',
          '  gui       - Comando especial do Guilherme',
          '  guilherme - Comando especial do Guilherme',
          ''
        ]);
      } else {
        setTerminalHistory(prev => [...prev, `Comando '${command}' não foi encontrado. Digite 'help' para ver os comandos disponíveis.`]);
      }

      setTerminalInput('');
    }
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
              textAlign: 'left',
              height: '150px',
              overflowY: 'auto',
              position: 'relative'
            }}>
              {terminalHistory.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <form onSubmit={handleTerminalSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <span>C:\WINDOWS&gt; </span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#0f0',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                    outline: 'none',
                    flex: 1,
                    marginLeft: '5px'
                  }}
                  placeholder="Digite 'help' para ver os comandos"
                  autoFocus
                />
                <span style={{ animation: 'blink 1s infinite' }}>_</span>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>

      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#c0c0c0',
            border: '2px solid',
            borderColor: '#ffffff #808080 #808080 #ffffff',
            boxShadow: '2px 2px 0 0 #000000',
            padding: '0',
            width: '400px',
            animation: 'pulse 0.5s ease-out'
          }}>
            <div style={{
              background: 'linear-gradient(to right, #ff0084, #ff6b6b)',
              color: 'white',
              padding: '5px 8px',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: '13px',
              fontWeight: 'bold'
            }}>
              <span style={{ flex: 1 }}>💍 Proposta Especial 💍</span>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  width: '18px',
                  height: '18px',
                  border: '1px solid',
                  borderColor: '#ffffff #808080 #808080 #ffffff',
                  background: '#c0c0c0',
                  fontSize: '10px',
                  cursor: 'pointer'
                }}
              >×</button>
            </div>
            <div style={{
              padding: '30px',
              textAlign: 'center'
            }}>
              <h1 style={{
                fontFamily: 'MS Sans Serif, sans-serif',
                fontSize: '48px',
                margin: '20px 0',
                color: '#ff0084',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                animation: 'pulse 1s infinite'
              }}>
                PRA CASAR ;)
              </h1>
              <div style={{ fontSize: '60px', margin: '20px 0' }}>
                💐💍❤️
              </div>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  fontSize: '16px',
                  padding: '10px 30px',
                  fontFamily: 'MS Sans Serif, sans-serif',
                  background: '#ff0084',
                  color: 'white',
                  border: '2px solid',
                  borderColor: '#ffffff #808080 #808080 #ffffff',
                  cursor: 'pointer',
                  marginTop: '20px'
                }}
              >
                SIM! 💕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;