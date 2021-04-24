import { DemoComponent } from './components/shared/DemoComponent'
import { LayoutHome } from './pages/Layouts/LayoutHome';
import { LayoutInternal } from './pages/Layouts/LayoutInternal';
import './scss/main.scss'

function App() {
  return (
    <>
      <LayoutHome>
        <DemoComponent />
      </LayoutHome>
    </>
  );
}

export default App
