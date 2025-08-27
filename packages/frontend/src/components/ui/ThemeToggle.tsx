import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeSwitch } from '~/components/ui/ThemeSwitch.tsx';
import { useThemeContext } from '~/theme';

export const ThemeToggle = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <ThemeSwitch
      checked={mode === 'dark'}
      onChange={toggleTheme}
      icon={<Brightness7Icon />}
      checkedIcon={<Brightness2Icon />}
    />
  );
};
