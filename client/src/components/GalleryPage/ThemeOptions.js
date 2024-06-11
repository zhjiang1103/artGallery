import {FaHome, FaUniversity, FaPaintBrush } from 'react-icons/fa';
import ThemeButton from './ThemeButton';


const ThemeOptions = ({ setTheme }) => (
  <div className="flex flex-col items-center mb-4">
    <p className="text-lg text-black-200 mb-2">Try this artwork at different places:</p>
    <div className="flex flex-col md:flex-row gap-4">
      <ThemeButton data-testid="home" onClick={() => setTheme('home')}  icon={FaHome} label="At Home" />
      <ThemeButton data-testid="museum" onClick={() => setTheme('museum')}  icon={FaUniversity} label="At the Museum" />
      <ThemeButton data-testid="studio" onClick={() => setTheme('studio')}  icon={FaPaintBrush} label="In the Studio" />
    </div>
</div>
  );  

export default ThemeOptions