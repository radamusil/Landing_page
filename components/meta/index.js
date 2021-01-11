import Head from 'next/head';

export const Meta = () => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content='Site description' />
            <link rel='shortcut icon' href='/favicon.ico'></link>
        </Head>
    );
};
