
const Reviewer = (data) => {
    // console.log(data,'from reviewer')
  function lwr(str) {
    // Remove spaces from the input string
    let str2 = str.replace(/\s/g, "");
    // Convert the string to lowercase
    var lowerStr = str2.toLowerCase();
    let mail = "";
    if (lowerStr == "newyork") {
      mail = "info";
    } else if (lowerStr == "losangeles") {
      mail = "la";
    } else {
      mail = lowerStr;
    }
    return { lowerStr, mail };
  }

  return <p style={{marginTop:50,marginLeft:0}}> {lwr(data["data"].value).mail + "@tdgfurnitureexchange.com"}</p>;
};
export default Reviewer;