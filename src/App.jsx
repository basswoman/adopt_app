import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" breed="Japanese" animal="dog" /> */}
      {/* <Pet name="Pepper" breed="Cockatiel" animal="bird" /> */}
      {/* <Pet name="Dink" breed="Mixed" animal="cat" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
