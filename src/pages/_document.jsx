import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const url = (path) => process.env.ASSET_PREFIX + path;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
          <link rel="shortcut icon" href={url('/favicon.ico')} />
          <meta name="keywords" content="a11y, accessibility, accessibility testing" />
          <meta name="description" content="Inaccessible Art: A website with sample accessibility issues" />
          <meta name="author" content="N.E.Lilly" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600|PT+Sans+Narrow:700|PT+Serif:400,400i,700|Stalemate|Lora:400,700" rel="stylesheet" />
        </Head>
        <body id="top">
          <article className="page">
            <Main />
            <NextScript />
          </article>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
