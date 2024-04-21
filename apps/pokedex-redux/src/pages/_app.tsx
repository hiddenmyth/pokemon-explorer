import App from "next/app";
import { withRouter } from "next/router";
import NavbarComponent from "@repo/ui/components/common/layout/navbar";
import wrapper from "@/store";
import "@/styles/globals.css";
import "@repo/ui/styles.css";
import RootLayoutComponent from "@/components/layout";
import Providers from "./proviers";
import { ThemeProvider } from "next-themes";

class MyApp extends App {
  // @ts-expect-error
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- from library
        ...(Component.getInitialProps
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call -- from library
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Providers>
          <RootLayoutComponent>
            <Component {...pageProps} />
          </RootLayoutComponent>
        </Providers>
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
