'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);

  const scenes = [
    {
      text: "Herzlich Willkommen bei SmartWelcome!",
      duration: 3000
    },
    {
      text: "Wir sind Ihre intelligente Lösung für digitale Begrüßungssysteme.",
      duration: 4000
    },
    {
      text: "Mit SmartWelcome können Sie Ihre Besucher professionell und modern empfangen.",
      duration: 4500
    },
    {
      text: "Unser System bietet personalisierte Begrüßungen, automatische Check-ins und nahtlose Integration.",
      duration: 5000
    },
    {
      text: "Perfekt für Unternehmen, Hotels, Veranstaltungen und viele weitere Einsatzbereiche.",
      duration: 4500
    },
    {
      text: "Starten Sie jetzt mit SmartWelcome und beeindrucken Sie Ihre Gäste!",
      duration: 4000
    }
  ];

  useEffect(() => {
    if (isPlaying && currentScene < scenes.length) {
      const mouthInterval = setInterval(() => {
        setMouthOpen(prev => !prev);
      }, 200);

      const timer = setTimeout(() => {
        clearInterval(mouthInterval);
        setMouthOpen(false);
        if (currentScene < scenes.length - 1) {
          setCurrentScene(currentScene + 1);
        } else {
          setIsPlaying(false);
        }
      }, scenes[currentScene].duration);

      return () => {
        clearTimeout(timer);
        clearInterval(mouthInterval);
      };
    }
  }, [isPlaying, currentScene]);

  const startVideo = () => {
    setIsPlaying(true);
    setCurrentScene(0);
  };

  const resetVideo = () => {
    setIsPlaying(false);
    setCurrentScene(0);
    setMouthOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        {/* Background */}
        <div style={styles.background}>
          <div style={styles.logo}>SmartWelcome</div>
        </div>

        {/* Presenter */}
        <div style={styles.presenterContainer}>
          {/* Head */}
          <div style={styles.head}>
            {/* Hair */}
            <div style={styles.hair}></div>

            {/* Face */}
            <div style={styles.face}>
              {/* Eyes */}
              <div style={styles.eyesContainer}>
                <div style={styles.eye}>
                  <div style={styles.pupil}></div>
                </div>
                <div style={styles.eye}>
                  <div style={styles.pupil}></div>
                </div>
              </div>

              {/* Nose */}
              <div style={styles.nose}></div>

              {/* Mouth */}
              <div style={{
                ...styles.mouth,
                height: mouthOpen ? '15px' : '3px',
                borderRadius: mouthOpen ? '50%' : '50px',
              }}></div>
            </div>
          </div>

          {/* Body */}
          <div style={styles.body}>
            <div style={styles.shoulders}></div>
          </div>
        </div>

        {/* Text Display */}
        {isPlaying && (
          <div style={styles.textDisplay}>
            <p style={styles.text}>{scenes[currentScene].text}</p>
          </div>
        )}

        {/* Controls */}
        <div style={styles.controls}>
          {!isPlaying ? (
            <button onClick={startVideo} style={styles.button}>
              ▶ Video abspielen
            </button>
          ) : (
            <button onClick={resetVideo} style={styles.button}>
              ⏹ Stoppen
            </button>
          )}
        </div>

        {/* Progress */}
        {isPlaying && (
          <div style={styles.progress}>
            Szene {currentScene + 1} von {scenes.length}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  videoContainer: {
    width: '100%',
    maxWidth: '800px',
    aspectRatio: '16/9',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, #e0f7fa 0%, #b2ebf2 100%)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    position: 'absolute',
    top: '30px',
    left: '30px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00796b',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  presenterContainer: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  },
  head: {
    position: 'relative',
    width: '120px',
    height: '140px',
  },
  hair: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '110px',
    height: '80px',
    background: '#4a2c2a',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    zIndex: 1,
  },
  face: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90px',
    height: '100px',
    background: '#fdbcb4',
    borderRadius: '45% 45% 45% 45%',
    zIndex: 2,
  },
  eyesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  eye: {
    width: '16px',
    height: '16px',
    background: 'white',
    borderRadius: '50%',
    position: 'relative',
    border: '2px solid #333',
  },
  pupil: {
    width: '8px',
    height: '8px',
    background: '#333',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  nose: {
    width: '8px',
    height: '12px',
    background: '#f4a9a3',
    borderRadius: '0 40% 40% 0',
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  mouth: {
    width: '30px',
    background: '#c94d4d',
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'all 0.2s ease',
  },
  body: {
    width: '160px',
    height: '200px',
    background: '#2196F3',
    borderRadius: '20px 20px 0 0',
    position: 'relative',
    marginTop: '-20px',
  },
  shoulders: {
    width: '100%',
    height: '60px',
    background: '#1976D2',
    borderRadius: '50% 50% 0 0',
    position: 'absolute',
    top: '0',
  },
  textDisplay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    zIndex: 10,
  },
  text: {
    margin: 0,
    fontSize: '20px',
    color: '#333',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  controls: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 11,
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    background: '#00796b',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  progress: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '8px 15px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
    zIndex: 11,
  },
};
