import { Shoe } from "../models/Shoe";
import { ShoeReqDto } from "../validation/ShoeReq";

export interface ShoeService {
  createShoe(shoeReqDto: ShoeReqDto): Promise<Shoe>;
  listShoes(): Promise<Shoe[]>;
  listShoe(id: string): Promise<Shoe | undefined>;
  deleteShoe(id: string): Promise<void>;
}
