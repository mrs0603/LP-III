import { Shoe } from "../models/Shoe";
import { BaseRepository } from "./BaseRepository";
import { db } from "../database/db";

export class ShoeRepository extends BaseRepository<Shoe> {
  constructor() {
    super(db.shoes);
  }
}
