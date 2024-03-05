import ImageAndDesc from ".";
export default{
    title:"Molecules/ImageAndDesc",
    component:ImageAndDesc
}

export const Primary = () => <ImageAndDesc img={"/about/1.png"} content={"TDG Furniture Exchange fills a crucial need: providing a platform for furniture donations and distributions.Our mission is to foster sharing and connections, making a difference in people's lives."}></ImageAndDesc>
export const Secondary = () => <ImageAndDesc img={"/about/2.png"} height={475} width={450} content={"Rooted in the belief that everyone deserves a comfortable living space, we facilitate furniture donations and delivery at no cost to the donor or recipient. With the support of dedicated volunteers, partners, and ambassadors, we currently operate in nine locations, and aim to expand globally."}></ImageAndDesc>