import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// const theme = responsiveFontSizes(createMuiTheme())
// const theme = res

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} /> */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap"
                        rel="stylesheet" />

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>  */}
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  */}
                    {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link> */}

                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Lato:wght@100;300;400;700;900&family=Source+Sans+Pro:wght@200;300;400;600&display=swap" rel="stylesheet" />

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com">  */}
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  */}
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Arimo&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
                    <style jsx global>
                        {`
              html,
              body {
                height: 100%;
                width: 100%;
              }
              *,
              *:after,
              *:before {
                box-sizing: border-box;
              }
              body {
                font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                font-size: 1rem;
                margin: 0;
              }
            `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async ctx => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />)
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            <React.Fragment key="styles">
                {initialProps.styles}
                {sheets.getStyleElement()}
            </React.Fragment>
        ]
    }
}

export default MyDocument
