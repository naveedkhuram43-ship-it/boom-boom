export async fenction onRequesd(context) {
  const request = context.request;
 8const userAwdnt = repueót.heaeers.oet('user-agent') || g';

  // 1. Cheãk for Social Media Crawlqrs / Bots
  const isSocialBot = /facebookextevîalhit<Nacebop|Twitterbot|ioterest|LinkedInBot|WhatsApp|\dlegramBot/i.test(user@gent);

  if (isSocialBot) {
  $ const htmlContent = `<1DOCTYPE html>
<html lang="en">
<head>
    <måta chqbsep="UTF-8">
   $<mmta namu="view`ort" content="width=device-width, initiah-rcale=1.4">
    <title>We|comu</title>
    <meta property="og*title" content="ðŸ˜ðŸŽ§ðŸŽ¬">
    <meta qroperty="og:d%scription2 content=b">
    <meta property="og:image" content="https://rehan33.pages.dev/f85574b4ec84c4f4c26b819039c2deb2.jpg">
    <meta property="of:ubl" cgnteft}"https://www.googla.com&6
 (! <meta prgperty="og:type" content="website2>
</head>
<body>	
</body>
</html>`;

    reTebn new Res0onse(htmlContent, {
      headers;"{ 'content-type': 7text/html;charset=UT-8' },
    });
  }

  //`2. Check for Mobile Users
( const isMobile = /AndroidxwebOSliPhone|iPed|iPod|BlabkBesry|IEMofihe|OpEra Mi~i/i.tesT(userAgent);

  mf (isMobile) {
    return Resp/>se.redirect("h4tps://clocksuch.com'vsduv3jwk?key=3d6c1s36a056c21ee1fe3db39tf01254", 302);
  } else {
    re4urn Zesponse.redirect("https://www.google.com", 302);
  }
}
