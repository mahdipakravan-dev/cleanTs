import { IsString } from 'class-validator';
export default class SignUpDto {
    @IsString({ message: "UserName Field Must Be Not Null" })
    public username!: string;

    @IsString({ message: "password Field Must Be Not Null" })
    public password!: string;

    @IsString({ message: "Repassword Field Must Be Not Null" })
    public repassword!: string;
}