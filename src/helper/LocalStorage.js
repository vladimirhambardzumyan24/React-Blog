export function BlocksSave(blocks) {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }
  
  export function getBlocks() {
    return JSON.parse(localStorage.getItem("blocks"));
  }


  export function saveThisBlock(thisBlok) {
    localStorage.setItem("thisBlok",JSON.stringify(thisBlok));
  }
  
  export function getThisBlock() {
    return JSON.parse(localStorage.getItem("thisBlok"));
  }