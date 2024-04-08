import { Shoe } from "../models/Shoe";

export class ShoeResDto {
  id: string;
  number: number;
  brand: string;
  model: string;

  public static from(shoe: Shoe): ShoeResDto {
    const shoeResDto = new ShoeResDto();
    shoeResDto.id = shoe.id;
    shoeResDto.brand = shoe.brand;
    shoeResDto.model = shoe.model;
    return shoeResDto;
  }
}
