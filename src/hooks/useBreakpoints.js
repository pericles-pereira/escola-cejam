import { useMediaQuery } from '@mui/material';

const useBreakpoints = () => {
  const isMobile = useMediaQuery('(max-width: 599.95px)');
  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 959.95px)');
  const isDesktop = useMediaQuery('(min-width: 960px) and (max-width: 1920.95px)');
  const isDesktopXl = useMediaQuery('(min-width: 1921px)');

  return { isMobile, isTablet, isDesktop, isDesktopXl };
};

export default useBreakpoints;
