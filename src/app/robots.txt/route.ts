export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://vedantsubramanian.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}