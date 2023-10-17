import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../theme';
import '@mantine/core/styles.css';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import WidgetRealtime from './_widget/realtime';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme}>
          {children}
          <Toaster />
          <WidgetRealtime />
        </MantineProvider>
        <ToastContainer />
      </body>
    </html>
  );
}