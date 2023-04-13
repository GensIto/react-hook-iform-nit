import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().nonempty("名前は必須").min(4, "４文字以上"),
  email: z
    .string()
    .nonempty("メールアドレスはは必須")
    .email("正しいメールアドレスで入力してください"),
  password: z.string().nonempty("パスワードは必須").min(6, "6文字以上"),
});
