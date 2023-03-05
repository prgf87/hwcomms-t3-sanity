import Script from 'next/script';

export default function Head({ title }: any) {
  return (
    <>
      <title>
        {title
          ? title + ' - Hailey Wilson Communications'
          : 'Hailey Wilson Communications'}
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Developed by Global Web Systems - UK" />
      <link rel="icon" href="/images/logo.png" />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        });
        `,
                }}
              />
            </>
          );
}
