
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid, Container } from '@mui/material';
import CardComp from './Components/CardComp';
import { products } from './ServicesData/productList';


function App() {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          {products.map((item, index) => (
            <Grid item lg={4}>
              <CardComp item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
