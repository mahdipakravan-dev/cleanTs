import { IsString } from 'class-validator';
export default class CreateCatDto {
    @IsString({ message: "Name Field Must Be Not Null" })
    public name!: string;
}