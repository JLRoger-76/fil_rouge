import { Skill } from "../skill/skill";

export interface Instructor {
    id:number;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    address:string;
    skill:Skill[];
    session:string;
}
