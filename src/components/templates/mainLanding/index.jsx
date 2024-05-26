import style from "./index.module.css";
import LandingHero from "../../molecules/landing-hero";
import IconGroupDesc from "../../molecules/icon-group-desc";
import ThoughtAndLink from "../../molecules/thoughtAndLinks";
import SecondHeading from "../../molecules/landing-secondHeading";
import AOSComponent from "../../molecules/AOS";
import Button from "../../atoms/button";
export default function Landing() {
  return (
    <section className={style.main1}>
      <section>
        <LandingHero></LandingHero>
      </section>
      <section className={style.main3}>
        <SecondHeading
          buttonTrue={false}
          heading={"Our Process"}
          contactHeading={"Contact Us"}
        ></SecondHeading>
      </section>
      <section className={style.main4}>
        <IconGroupDesc></IconGroupDesc>
      </section>
      <section className={style.buttonComponent}>

      {/* <Button
        href={"/contactUs"}
        content={"Contact Us"}
        effect={true}
        ></Button> */}
        </section>
      <AOSComponent>
        <section className={style.main5} data-aos="fade-up">
          <ThoughtAndLink
            Description={""}
            name={""}
            ButtonContent={"About Us"}
            href="/aboutUs"
          ></ThoughtAndLink>
        </section>
      </AOSComponent>
    </section>
  );
}
