import React,{useState}  from 'react';
import Wave from 'react-wavify';
import styled from '@emotion/styled';
import './App.css';
import tomate from './tomate.png';
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";
import Timer from './Timer';


const WaveContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;




function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);


  return (

   

    <div className="App">


      
      <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
    

     


    




    
    <div style={{ marginTop: "-200px" }}>
      <WaveContainer level={90}>
        <Wave
          fill="#00b6ad"
          paused={false}
          opacity="0.30"
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#00959e"
          opacity="0.80"
          paused={false}
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#01838a"
          paused={false}
          opacity="0.5"
          options={{
            height: 45,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </WaveContainer>
    </div>




    </div>
  );
}

export default App;
