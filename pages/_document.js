import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/plugins/jquery/jquery-1.12.4.min.js"></script>
          <script src="/plugins/jquery/jquery.flexslider-min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
