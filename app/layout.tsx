import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./Nav";

export const metadata = {
  title: "Next.js Test App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <Nav />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
