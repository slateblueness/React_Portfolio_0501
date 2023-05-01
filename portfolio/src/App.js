import './App.css';

// 부트스트랩 사용을 위한 css
import "bootstrap/dist/css/bootstrap.min.css";

// 슬릭 라이브러리 사용을 위한 css

// 컴포넌트 import
import NavComp from './components/NavComp';
import SliderComp from './components/SliderComp';

function App() {
  return (
    <div className="App">
      <NavComp/>
      <SliderComp/>
    </div>
  );
}

export default App;
