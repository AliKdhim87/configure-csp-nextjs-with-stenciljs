import { headers } from "next/headers";

import { UtrechtIconChevronUp } from "../components";

import React from "react";

export default function Page() {
  const nonce = headers().get("x-nonce") || '';

  return <body suppressHydrationWarning={true}>
    <UtrechtIconChevronUp nonce={nonce}></UtrechtIconChevronUp>
    <p>{nonce}</p>
  </body>
}