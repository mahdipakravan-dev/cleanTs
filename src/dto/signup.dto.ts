import { IsString, Min, Max, Length } from 'class-validator';
export default class SignUpDto {
    @IsString({ message: "UserName Field Must Be Not Null" })
    public username!: string;

    @IsString({ message : "password Field Must Be Not Null" })
    @Length(6 , 12 , {message : "Password Should have 6 character minimum"})
    public password!: string;
}