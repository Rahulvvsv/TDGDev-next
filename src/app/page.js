
import Image from "next/image";
import style from "./index.module.css"
import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";
import LandingHero from "@/components/molecules/landing-hero";
import IconGroupDesc from "@/components/molecules/icon-group-desc";
import ThoughtAndLink from "@/components/molecules/thoughtAndLinks";
import SecondHeading from "@/components/molecules/landing-secondHeading";
export default function Home() {
  return (
    <section>
        <section>
          <Header></Header>
        </section>
        <section className={style.main1}>
            <LandingHero></LandingHero>
        </section>
        <section className={style.main3}>
          <SecondHeading heading={"Our Furniture"} contactHeading={"Contact Us"}></SecondHeading>
        </section>
        <section className={style.main4}>
          <IconGroupDesc></IconGroupDesc>
        </section>
        <section className={style.main5}>
          <ThoughtAndLink Description={"Helping people furnish their homes through the TDG Furniture Exchange is incredibly rewarding.It reminds us of the transformative power of design and the positive impact we can create in our communities"}
          name={"- Blima Ehrentreu, The Designers Group"} ButtonContent={"About Us"}
          ></ThoughtAndLink>
        </section>
        <section>
          <Footer>  </Footer>
        </section>
    </section>
  );
}
