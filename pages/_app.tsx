import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Quicksand, Montserrat} from "next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"]
});
const montserrat = Montserrat({
    subsets: ["latin"]
});


export default function App({Component, pageProps}: AppProps) {
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
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
