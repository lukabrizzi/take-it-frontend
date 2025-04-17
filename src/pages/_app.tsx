import '../styles/globals.css';

import { AppProps } from 'next/app';

import { useTheme } from '../hooks/useTheme';

function App({ Component, pageProps }: AppProps) {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      test
      {/* <Component {...pageProps} toggleTheme={toggleTheme} /> */}
    </div>
  );
}

export default App;
