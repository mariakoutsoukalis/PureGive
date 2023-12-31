import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '../styles/globals.css'; // Assuming you have a global stylesheet

// Add all icons to the library so you can use them in your components
library.add(fas, fab, far);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;