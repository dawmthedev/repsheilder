'use client'

import Script from 'next/script'

const HOTJAR_ID = 6663052
const HOTJAR_SNIPPET_VERSION = 6

export function Hotjar() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script id="hotjar" strategy="afterInteractive">
      {`(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SNIPPET_VERSION}};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
    </Script>
  )
}
