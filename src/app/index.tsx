import { createRoot } from 'react-dom/client';

import css from './index.less';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <h1>💖 Hello World!</h1>
    <p className={css.title}>Welcome to your Electron application.</p>
  </>,
);
