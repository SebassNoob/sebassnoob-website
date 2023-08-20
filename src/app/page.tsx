'use client';

import Globals from './globals';
import { MediaQueryProvider } from './Providers/MediaQueryProvider';

export default function Home() {
  return (
    <MediaQueryProvider>
      <Globals />
    </MediaQueryProvider>
  );
}
