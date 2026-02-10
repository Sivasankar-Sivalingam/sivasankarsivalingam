import "./globals.css";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sivasankar Sivalingam</title>
        <meta
          name="description"
          content="Sivasankar Sivalingam, a passionate front-end developer with expertise in React, Next.js, Angular, Javascript and TypeScript. With a strong background in building responsive and accessiblity compliant web applications, Sivasankar is dedicated to creating seamless digital experiences. Explore his portfolio to see his latest projects and contributions to the web development community."
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
