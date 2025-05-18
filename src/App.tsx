import React, { useState } from 'react';
import Clock from './components/Clock';
import NavBar from './components/NavBar';
import CRTOverlay from './components/CRTOverlay';
import Background from './components/Background';
import BootSequence from './components/BootSequence';
import ThemeSelector from './components/ThemeSelector';
import AlarmManager from './components/AlarmManager';
import Settings from './components/Settings';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [currentView, setCurrentView] = useState<string>('clock');
  const [isBooting, setIsBooting] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'clock':
        return <Clock />;
      case 'themes':
        return <ThemeSelector />;
      case 'alarms':
        return <AlarmManager />;
      case 'settings':
        return <Settings />;
      default:
        return <Clock />;
    }
  };

  return (
    <ThemeProvider>
      <div className="relative h-screen w-screen overflow-hidden bg-gray-900 text-white font-pixel">
        {isBooting ? (
          <BootSequence />
        ) : (
          <>
            <Background />
            <div className="relative z-10 h-full w-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                {renderCurrentView()}
              </div>
              <NavBar currentView={currentView} setCurrentView={setCurrentView} />
            </div>
            <CRTOverlay />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;