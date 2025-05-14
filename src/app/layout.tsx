import { FC, PropsWithChildren } from 'react';
import './globals.scss';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="position-relative">{children}</body>
    </html>
  );
};

export default RootLayout;
