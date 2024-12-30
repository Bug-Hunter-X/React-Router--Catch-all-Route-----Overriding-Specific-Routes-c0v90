```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The catch-all route is now placed last to act as a fallback. */}        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }
function NotFound() { return <div>Not Found</div>; }

export default App;
```