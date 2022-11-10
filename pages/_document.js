import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ru">
            <Head >
                <meta name="description"
                      content="Семейный ресторан, объединяющий Японскую
                       и Итальянскую кухню, в городе Данилов."/>
                <link rel="icon" href="/favicon.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}