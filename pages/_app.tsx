import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Quicksand, Montserrat} from "next/font/google";
import {HydrationBoundary, QueryClientProvider,QueryClient} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import React from "react";
import {ModalProvider} from "@/store/ModalContext";

const quicksand = Quicksand({
    subsets: ["latin"]
});
const montserrat = Montserrat({
    subsets: ["latin"]
});


export default function App({Component, pageProps}: AppProps) {

    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        refetchIntervalInBackground: false,
                        retry: 0,
                        staleTime: 60 * 1000,
                    }
                }
            }),
    )

    return (
        <>
            <style jsx global>
                {`
                    html {
                        font-family: ${quicksand.style.fontFamily}, sans-serif;
                        --font-montserrat: ${montserrat.style.fontFamily};
                    }
                `}
            </style>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary state={pageProps.dehydratedState}>
                    <ModalProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    </ModalProvider>
                    <ToastContainer closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}
                                    hideProgressBar={false} autoClose={false}/>
                    <ReactQueryDevtools  client={queryClient} initialIsOpen={false}/>
                </HydrationBoundary>
            </QueryClientProvider>

        </>
    )
}
