import Document, {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:url" content="https://portfolio-vic-projects.vercel.app" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="Víctor's personal website"
                    />
                    <meta
                        property="og:description"
                        content="Information contact, projects and courses
                        2000-2022 
                        ©All rights reserved"
                    />
                    <meta property="og:image" content={"https://avatars.githubusercontent.com/u/61021780?v=4"} />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>

            </Html>
        )
    }

}