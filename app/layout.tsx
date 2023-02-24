import { getServerSession } from "next-auth";
import { SessionProvider } from "../components/SessionProvider";
import { GoogleAuthOptions } from "../pages/api/auth/[...nextauth]";
import SideBar from "../components/SideBar";
import Login from "../components/Login";
import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(GoogleAuthOptions);
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ height: `calc(var(${--vh}, 1vh) * 100)` }}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div>
                <SideBar />
              </div>
              <div className="flex-1 backGround">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
