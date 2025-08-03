import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Quicksand, Montserrat} from "next/font/google";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {ToastContainer} from "react-toastify";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const quicksand = Quicksand({
    subsets: ["latin"]
});
const montserrat = Montserrat({
    subsets: ["latin"]
});


export default function App({Component, pageProps}: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: 0
            }
        }
    });
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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ToastContainer closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}
                                hideProgressBar={false} autoClose={false}/>
                <ReactQueryDevtools  client={queryClient} initialIsOpen={false}/>
            </QueryClientProvider>

        </>
    )
}
