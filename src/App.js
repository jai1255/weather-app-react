import Container from '@mui/material/Container';
import WeatherPage from './pages/Weather-page';

const App = () => {
  return (
    <div className='app'>
     <Container style={{"textAlign": "center"}}>
      <h1>Weather App</h1>
      <WeatherPage/>
     </Container>
    </div>
  );

}

export default App;
