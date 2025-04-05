import Bedsheet1 from "@/assets/products/Bedsheet/Bedsheet1.webp";
import Bedsheet2 from "@/assets/products/Bedsheet/Bedsheet2.webp";
import CuttingCape1 from "@/assets/products/CuttingCape/CuttingCape1.webp";
import CuttingCape2 from "@/assets/products/CuttingCape/CuttingCape2.webp";
import CuttingCape3 from "@/assets/products/CuttingCape/CuttingCape3.webp";
import FacialTissue1 from "@/assets/products/FacialTissue/FacialTissue1.webp";
import FacialTissue2 from "@/assets/products/FacialTissue/FacialTissue2.webp";
import Headband1 from "@/assets/products/HeadBand/Headband1.webp";
import Headband2 from "@/assets/products/HeadBand/Headband2.webp";
import Headband3 from "@/assets/products/HeadBand/Headband3.webp";
import Panty1 from "@/assets/products/Panty/Panty1.webp";
import Panty2 from "@/assets/products/Panty/Panty2.webp";
import SpaWrap1 from "@/assets/products/SpaWrap/SpaWrap1.webp";
import SpaWrap2 from "@/assets/products/SpaWrap/SpaWrap2.webp";
import SpaWrap3 from "@/assets/products/SpaWrap/SpaWrap3.webp";
import Towel1 from "@/assets/products/Towel/Towel1.webp";
import Towel2 from "@/assets/products/Towel/Towel2.webp";
import WaxingStrip1 from "@/assets/products/WaxingStrip/WaxingStrip1.webp";
import WaxingStrip2 from "@/assets/products/WaxingStrip/WaxingStrip2.webp";
import WaxingStrip3 from "@/assets/products/WaxingStrip/WaxingStrip3.webp";

interface Product {
  id: string;
  productName: string;
  images: string[];
  size: string;
  gsm: number;
  colour: string;
  usage: string;
}

interface ProductImages {
  [key: string]: Product;
}

const importImages = (category: string, count: number): string[] => {
  return Array.from({ length: count }, (_, index) => 
    require(`@/assets/products/${category}/${category}${index + 1}.webp`).default
  );
};

const productImages: ProductImages = {
  Bedsheet: {
    id: "1",
    productName: "Bedsheet",
    images: importImages("Bedsheet", 2),
    size: "31.5*72",
    gsm: 25,
    colour: "White",
    usage: "Provides a clean and hygienic surface for spa and salon use."
  },
  CuttingCape: {
    id: "2",
    productName: "Cutting Cape",
    images: importImages("CuttingCape", 3),
    size: "47*55",
    gsm: 25,
    colour: "White",
    usage: "Protects clients from hair and spills during haircuts."
  },
  FacialTissue: {
    id: "3",
    productName: "Facial Tissue",
    images: importImages("FacialTissue", 2),
    size: "12*12",
    gsm: 20,
    colour: "White",
    usage: "Ideal for skincare, makeup removal, and facial treatments."
  },
  HeadBand: {
    id: "4",
    productName: "Head Band",
    images: importImages("Headband", 3),
    size: "24*2.5",
    gsm: 25,
    colour: "White",
    usage: "Keeps hair in place during facial and skincare treatments."
  },
  Panty: {
    id: "5",
    productName: "Panty",
    images: importImages("Panty", 2),
    size: "Universal Fit",
    gsm: 40,
    colour: "Black",
    usage: "Provides hygienic disposable wear for waxing and spa treatments."
  },
  SpaWrap: {
    id: "6",
    productName: "Spa Wrap",
    images: importImages("SpaWrap", 3),
    size: "31*31",
    gsm: 25,
    colour: "Black",
    usage: "Offers coverage and comfort during spa and massage sessions."
  },
  Towel: {
    id: "7",
    productName: "Towel",
    images: importImages("Towel", 2),
    size: "18*36",
    gsm: 50,
    colour: "White",
    usage: "Absorbs moisture and maintains hygiene in salons and spas."
  },
  WaxingStrip: {
    id: "8",
    productName: "Waxing Strip",
    images: importImages("WaxingStrip", 3),
    size: "3.6*10.5",
    gsm: 120,
    colour: "White & Brown",
    usage: "Used for effective hair removal in waxing treatments."
  }
};

export default productImages;