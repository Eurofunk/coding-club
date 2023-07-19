import { Center } from "./center";

export interface CenterList {
    data: Center[],
    page: number,
    limit: number
    total: number
}