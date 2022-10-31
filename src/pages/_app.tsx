import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useTheme } from "src/app/hooks";

import { createEmotionCache } from "src/app/utility";
import * as locales from "src/assets/locales";
import { DefaultLayout, LayoutProps } from "src/layouts";

type MyAppProps = (
  props: AppProps & {
    Component: NextPage & {
      layout?: LayoutProps;
    };
    emotionCache: EmotionCache;
  }
) => ReactElement;

const MyApp: MyAppProps = ({
  Component,
  emotionCache = createEmotionCache(),
  pageProps,
}) => {
  const theme = useTheme();
  const { locale, defaultLocale = "vi" } = useRouter();
  const messages = useMemo(() => {
    const localeKey = locale || defaultLocale;
    return locales[localeKey as keyof typeof locales];
  }, [defaultLocale, locale]);

  const Layout = Component.layout || DefaultLayout;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SnippetBox</title>
      </Head>

      <IntlProvider
        locale={locale || defaultLocale}
        messages={messages as any}
        onError={() => null}
      >
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
