import Head from "next/head";
import { Analytics } from "@vercel/analytics/next"


function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                `}</style>
      </Head>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          display: "grid",
          placeItems: "center",
          height: "100vh",
          backgroundColor: "#1e1e1e",
        }}
      >
        <main style={{ color: "#ffffff", padding: "1rem" }}>
          <span>Caro Devi,</span>
          <h1>
            O nome{" "}
            <span style={{ fontWeight: "700", color: "red" }}>Devilman</span> é
            mil vezes melhor que{" "}
            <span style={{ fontWeight: "700", color: "gray" }}>ValkyriaX</span>.
          </h1>
          <p>Atenciosamente, Samurai.</p>
        </main>
      </div>
      <Analytics />
    </>
  );
}

export default Home;
