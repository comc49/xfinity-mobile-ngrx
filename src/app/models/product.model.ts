import { DeviceColor } from "./device-color.model";
import { Image } from "./image.model";
import { Price } from "./price.model";

export interface Product {
    productCode: string,
    name: string,
    slug: string,
    availableChannels: string[],
    category: string,
    deviceAcceptsTradein: boolean,
    subcategory: string,
    dateAdded: string,
    rank: number,
    brand: string,
    brandCode: string,
    deviceOS: string,
    is5GCapable: true,
    status: string,
    prices: Price[],
    colors: DeviceColor[],
    image: Image
}
  