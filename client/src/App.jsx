import { useEffect, useState } from 'react';
import About from './About';
// Visual Studio edit test
function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
        
  }, []);

  return (
    
    <div>
      <h1>Welcome</h1>
          <h1>{msg}</h1>
          <p>This is the About page feature.</p>

      <About />
    </div>
  );
}

export default App;
// one more change updated






