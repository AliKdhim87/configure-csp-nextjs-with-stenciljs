import { headers } from "next/headers";
import { setNonce } from '@utrecht/web-component-library-stencil/loader';
import React from "react";

export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce") || '';
  setNonce(nonce)
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
