import { PYHeroDocument } from "../dal/hero.document";

export interface PYHeroDataAccessLogic {
    listHeroes(): Promise<PYHeroDocument[]>
}