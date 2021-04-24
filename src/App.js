import { Container } from './components/Container';
import { DemoComponent } from './components/shared/DemoComponent'
import { LayoutMain } from './pages/Layouts/LayoutMain';
import './scss/main.scss'

function App() {
  return (
    <>
      <LayoutMain>
        <Container>
          <DemoComponent />
        </Container>
      </LayoutMain>
    </>
  );
}

export default App
