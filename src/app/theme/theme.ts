import { Training } from "../formation/formation";

export interface Theme {
    id: number;
    name:string;
    parent:string;
    children:string[];
    formations:string[];
}
