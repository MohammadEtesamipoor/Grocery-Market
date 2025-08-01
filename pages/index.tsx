import {Banner, IconComponent, ImageComponent, Section} from "@/components";

export default function Home() {
    return (
        <div>
            <Section>
                <Banner title={"Don’t miss amazing grocery deals"} subtitle={"Sign up for the daily newsletter"}
                        image={"/assets/images/bg-hero-desktop.png"}
                        bgImage={"/assets/images/bg-design-hero-main.png"}/>
            </Section>

        </div>
    );
}
