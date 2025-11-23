export const metadata = {
  title: 'SmartWelcome - Willkommen',
  description: 'SmartWelcome Präsentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
