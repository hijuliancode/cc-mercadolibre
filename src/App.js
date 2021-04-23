import { DemoComponent } from './components/shared/DemoComponent'
import './scss/main.scss'

function App() {
  return (
    <div className="App">
      App.js

      <div className="grid xxs-2-columns lg-4-columns">
        <p>hola</p>
        <p>mundo</p>
        <p>como</p>
        <p>vamos?</p>
        <a href="holamundo.com">Hola Mundo</a>
      </div>
      <hr/>

      <DemoComponent />
    </div>
  );
}

export default App
