import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Header from "../components/Header";
import Links from "../components/Links";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8 ">
      <Head>
        <title>Anirudh Soni | Linktree | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Anirudh Soni | Linktree | MERN and LAMP stack Web Developer"
        />
        <meta
          name="description"
          content=" Hi, I am Anirudh Soni a web developer from Rajasthan who focuses on user interfaces, including rich experiences, design."
        />
        <meta
          name="keywords"
          content="Full-Stack Web Developer, Web Designer, MERN Stack, LAMP Stack, Portfolio, Anirudh, Soni"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0 days" />
        <meta name="author" content="Anirudh Soni" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linktree.anirudhsoni.in/" />
        <meta
          property="og:title"
          content="Anirudh Soni | Linktree | Web Developer"
        />
        <meta
          property="og:description"
          content=" Hi, I am Anirudh Soni a web developer from Rajasthan who focuses on user interfaces, including rich experiences, design."
        />
        <meta property="og:image" content="/assets/images/banner.png" />

        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://linktree.anirudhsoni.in/"
        />
        <meta
          property="twitter:title"
          content="Anirudh Soni | Linktree | Web Developer"
        />
        <meta
          property="twitter:description"
          content=" Hi, I am Anirudh Soni a web developer from Rajasthan who focuses on user interfaces, including rich experiences, design."
        />
        <meta property="twitter:image" content="/assets/images/banner.png" />
      </Head>
      <Background />
      <Header />
      <About />
      <Links />
      <footer className="py-8 text-lg">
        &lt;/&gt; by{" "}
        <a
          href="https://anirudhsoni.in"
          className="text-blue-600 font-bold"
          target={"blank"}
        >
          {" "}
          Anirudh Soni{" "}
        </a>
      </footer>
    </div>
  );
}
