import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import mainSong from './mp3/big_bunda_time.mp3';
import youSoSpecial from './mp3/ada_you_so_special.mp3';
import tylkoAda from './mp3/tylko_ada.mp3';
import loop from './mp3/loop.mp3';

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  width: 100%;
  background-color: lightpink;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const FlexRow = styled.div`
  display: flex;
`

function App() {
  const [current, setCurrent] = useState(0)
  const [timestamp, setTimestamp] = useState(null)
  const [regulaminAccepted, setRegulaminAccepted] = useState(false);

  const [playMainSong, mainSongExposedData] = useSound(mainSong, { loop: true })
  const [playYouSoSpecial] = useSound(youSoSpecial)
  const [playTylkoAda] = useSound(tylkoAda)
  const [playLoop, playLoopExposedData] = useSound(loop, { loop: true, playbackRate: 1.25 });
  const [playLoopSlow] = useSound(loop, { loop: true, playbackRate: 0.7 });

  return (
    <CenterContainer>
      {current === 0 && (
        <img src={process.env.PUBLIC_URL + '/ryje/1.png'} width={200} className='image-pulse' onClick={() => { setCurrent(1); playMainSong(); }} />
      )}
      {current === 1 && (
        <>
          <p className='text-very-slow-appear' onClick={() => { setCurrent(2); playYouSoSpecial() }}>Ada</p>
          <p className='text-very-very-slow-appear'>u hav tu click</p>
        </>
      )}
      {current === 2 && (
        <p className='text-very-slow-appear' onClick={() => setCurrent(3)}>gurl</p>
      )}
      {current === 3 && (
        <FlexContainer>
          <p className='text-slow-appear'>how you feelin tunajt bejbe</p>
          <button className='button' onClick={() => setCurrent(4)}>It's my birthday</button>
        </FlexContainer>
      )}
      {current === 4 && (
        <FlexContainer>
          <p className='text-pulse' onClick={() => { setCurrent(5); playTylkoAda(); }}>oł jeah</p>
        </FlexContainer>
      )}
      {current === 5 && (
        <FlexContainer>
          <p className='text-slow-appear'>we got a little sumthin for you</p>
          <button className='button' onClick={() => setCurrent(6)}>show me bejbe</button>
        </FlexContainer>
      )}
      {current === 6 && (
        <FlexContainer>
          <p className='text-fadein-pulse'>it's a wąszer</p>
          <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(7)}>OŁ EM DŻI</button>
        </FlexContainer>
      )}
      {current === 7 && (
        <FlexContainer>
          <p className='text-fadein-pulse'>now before we proceed</p>
          <p className='text-fadein-pulse'>please enjoy this fine selection of ryje</p>
          <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(8)}>brigidą</button>
        </FlexContainer>
      )}
      {current === 8 && (
        <FlexContainer>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/2.jpeg'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/3.jpeg'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/4.jpeg'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/5.jpeg'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(9)}>giv mi mor</button>
          </FlexRow>
        </FlexContainer>
      )}
      {current === 9 && (
        <FlexContainer>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/6.jpeg'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/7.jpeg'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/8.png'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/9.png'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(10)}>just like that baby</button>
          </FlexRow>
        </FlexContainer>
      )}
      {current === 10 && (
        <FlexContainer>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/10.png'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/11.png'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <img src={process.env.PUBLIC_URL + '/ryje/12.png'} height={300} className='image-pulse' />
            <img src={process.env.PUBLIC_URL + '/ryje/13.png'} height={300} className='image-pulse' />
          </FlexRow>
          <FlexRow>
            <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(11)}>ok i've had enough</button>
          </FlexRow>
        </FlexContainer>
      )}
      {current === 11 && (
        <FlexContainer>
          <p className='text-slow-appear'>now it gives me the humungous pleasure to present to you</p>
          <p className='text-slow-appear'><strong>the wąszer</strong></p>
          <FlexRow>
            <button className='button-no-delay' style={{ cursor: 'pointer' }} onClick={() => { setCurrent(12); mainSongExposedData.stop(); playLoop(); }}>ok mę</button>
          </FlexRow>
        </FlexContainer>
      )}
      {current === 12 && (
        <FlexContainer>
          <p className='regulamin-header'>Rehulałiñ Wąszerü na Fosiąh</p>
          <ul style={{ textAlign: 'left', maxWidth: 800 }}>
            <li><h3>Przedmiot regulaminu</h3></li>
            <ul>
              <li>Niniejszy regulamin określa warunki korzystania z Vouchera na Przyjazdy z Poznania do Warszawy (dalej zwany "Talonem") przez Adę (dalej zwana "Odbiorcą").</li>
              <li>Talon został przekazany Odbiorcy przez grupę znajomych z Warszawy, zwaną "808", z okazji urodzin Ady.</li>
            </ul>
            <li><h3>Zakres wykorzystania Talonu</h3></li>
            <ul>
              <li>Talon uprawnia Odbiorcę do skorzystania z dowolnej formy komunikacji, takiej jak kolej, autobus, samochód lub inna odpowiednia środek transportu, służącego podróży z Poznania do Warszawy</li>
              <li>Wykorzystanie Talonu jest możliwe jedynie w celach towarzyskich związanych z grupą znajomych "808"</li>
              <li>Odbiorca nie może przekazać Talonu osobom trzecim, niebędącym członkami grupy "808", ani korzystać z Talonu w innych celach niż określone w punkcie 2.2.</li>
            </ul>
            <li><h3>Warunki korzystania z Talonu</h3></li>
            <ul>
              <li>Odbiorca zobowiązany jest do wcześniejszego uzgodnienia terminu podróży z członkami grupy "808".</li>
              <li>Odbiorca powinien zgłosić chęć skorzystania z Talonu grupie "808" z odpowiednim wyprzedzeniem, nie krótszym niż 14 dni przed planowaną datą podróży.</li>
              <li>Skorzystanie z Talonu wymaga uzyskania pisemnego potwierdzenia od co najmniej jednego członka grupy "808" potwierdzającego datę i cel podróży.</li>
              <li>Aby zrealizować Talon na daną podróż, Odbiorca kupuje bilet, a następnie żąda zwrotu środków poprzez adres poczty elektronicznej adapestkakis808@gmail.com</li>
            </ul>
            <li><h3>Postanowienia końcowe</h3></li>
            <ul>
              <li>Talon jest ważny bezterminowo.</li>
              <li>Odbiorca zobowiązuje się do przestrzegania wszelkich obowiązujących przepisów prawa dotyczących podróży i korzystania z odpowiednich środków transportu.</li>
              <li>Wszelkie spory wynikłe w związku z wykorzystaniem Talonu będą rozstrzygane na drodze negocjacji między stronami.</li>
              <li>Regulamin Talonu podlega polskiemu prawu i jurysdykcji sądów polskich.</li>
            </ul>
          </ul>
          <p>
            <input type="checkbox" className='button-simple' id="regulamin" onChange={() => setRegulaminAccepted(!regulaminAccepted)} />
            <label for="regulamin">click here to accept the regulamin wąszera</label>
          </p>
          <button className='button-simple' disabled={!regulaminAccepted} style={{ cursor: 'pointer' }} onClick={() => { setCurrent(13); playLoopExposedData.stop(); playLoopSlow() }}>{regulaminAccepted ? 'now ur redi' : 'accept the regulamin'}</button>
        </FlexContainer>
      )}
      {current === 13 && (
        <FlexContainer>
          <p className='text-fadein-pulse'>you receive</p>
          <p className='text-fadein-pulse'><strong>611,85 pelenów</strong></p>
          <p className='text-fadein-pulse'>congratulations baby dałaś radę</p>
          <button className='button' style={{ cursor: 'pointer' }} onClick={() => setCurrent(0)}>start again</button>
        </FlexContainer>
      )}
    </CenterContainer>
  );
}

export default App;
