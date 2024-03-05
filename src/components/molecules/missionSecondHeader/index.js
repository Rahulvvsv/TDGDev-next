import style from "./index.module.css"
import ImageAndDesc from "../ImageAndDescription";
const MissionSecondHeader = () => {
    return ( 
    <div className={style.main}>
            <ImageAndDesc img={"/about/1.png"} content={"TDG Furniture Exchange fills a crucial need: providing a platform for furniture donations and distributions.Our mission is to foster sharing and connections, making a difference in people's lives."}></ImageAndDesc>

            <ImageAndDesc img={"/about/2.png"} height={475} width={450} content={"Rooted in the belief that everyone deserves a comfortable living space, we facilitate furniture donations and delivery at no cost to the donor or recipient. With the support of dedicated volunteers, partners, and ambassadors, we currently operate in nine locations, and aim to expand globally."}></ImageAndDesc>

            <ImageAndDesc img={"/about/3.png"} content={"Join us in the TDG Furniture Exchange initiative, in memory of Yonah Ben Akiva. Together, we enhance interiors and uplift communities through acts of kindness."}></ImageAndDesc>
    </div>
     );
}
 
export default MissionSecondHeader;