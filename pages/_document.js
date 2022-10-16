import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ru">
            <Head >
                <meta name="description" content="Ресторан Сагай Палермо рад новым гостям"/>


                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}