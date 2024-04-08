import { Shoe } from "../models/Shoe";
import { ShoeService } from "./Shoe.service";
import { ShoeReqDto } from "../validation/ShoeReq";
import { ShoeRepository } from "../repos/ShoeRepository";

export class ShoeServiceImpl implements ShoeService {
  shoeRepository: ShoeRepository;

  constructor(shoeRepository: ShoeRepository) {
    this.shoeRepository = shoeRepository;
  }

  createShoe(shoeReqDto: ShoeReqDto): Promise<Shoe> {
    const { number, brand, model } = shoeReqDto;

    const newShoe = new Shoe();
    newShoe.number = number;
    newShoe.brand = brand;
    newShoe.model = model;

    return this.shoeRepository.save(newShoe);
  }

  async listShoes(): Promise<Shoe[]> {
    return this.shoeRepository.find();
  }

  async listShoe(id: string): Promise<Shoe | undefined> {
    return this.shoeRepository.findById(id);
  }

  async deleteShoe(id: string): Promise<void> {
    return this.shoeRepository.removeById(id);
  }
}
