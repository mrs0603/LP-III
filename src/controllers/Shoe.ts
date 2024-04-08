import { Request, Response } from "express";
import { ZodError } from "zod";

import { ShoeService } from "../services/Shoe.service";
import { ShoeReqParams, ShoeReqValidation } from "../validation/ShoeReq";
import { ShoeResDto } from "../validation/ShoeRes";

export class ShoeController {
  shoeService: ShoeService;

  constructor(shoeService: ShoeService) {
    this.shoeService = shoeService;
  }

  createShoe = async (req: Request, res: Response) => {
    try {
      const shoeReqDto = ShoeReqValidation.parse(req.body);
      const newShoe = await this.shoeService.createShoe(shoeReqDto);
      const shoeResDto = ShoeResDto.from(newShoe);

      return res.status(201).json({ shoeResDto });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(error.issues);
      }
      res.status(500).end("internal server error");
      throw error;
    }
  };

  listShoes = async (req: Request, res: Response) => {
    const shoes = await this.shoeService.listShoes();

    const shoesDto = shoes.map((shoe) => ShoeResDto.from(shoe));

    return res.status(200).json({ shoesDto });
  };

  listShoe = async (req: Request, res: Response) => {
    try {
      const params = ShoeReqParams.parse(req.params);
      const shoe = await this.shoeService.listShoe(params.id);

      if (!shoe) {
        return res.status(404).end("shoe not found");
      }

      return res.status(200).json({ shoe });
    } catch (error) {
      res.status(500).end("internal server error");
      throw error;
    }
  };

  deleteShoe = async (req: Request, res: Response) => {
    try {
      const params = ShoeReqParams.parse(req.params);

      const shoeExists = await this.shoeService.listShoe(params.id);

      if (!shoeExists) {
        return res.status(404).end("shoe not found");
      }

      await this.shoeService.deleteShoe(params.id);
      return res.status(200).end("shoe has been deleted");
    } catch (error) {
      res.status(500).end("internal server error");
      throw error;
    }
  };
}
