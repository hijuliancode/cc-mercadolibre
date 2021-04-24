import { DemoComponent } from './components/shared/DemoComponent'
import { LayoutMain } from './pages/Layouts/LayoutMain';
import './scss/main.scss'

function App() {
  return (
    <>
      <LayoutMain>
        <DemoComponent />
      </LayoutMain>
    </>
  );
}

export default App
