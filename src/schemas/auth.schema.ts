import * as z from "zod";

// export const registerSchema = z.object({
//   email: z
//     .string()
//     .min(6, { message: "Email ít nhất 6 ký tự" })
//     .email("Email không đúng định dạng")
//     .trim(),
//   password: z
//     .string()
//     .min(1, { message: "Mật khẩu không được để trống" })
//     .min(6, { message: "Mật khẩu ít nhất 6 ký tự" })
//     .trim(),
//   name: z.string().min(1, { message: "Tên không được để trống" }).trim(),
// });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email("Email không đúng định dạng")
    .trim(),
  password: z
    .string()
    .min(1, { message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu ít nhất 6 ký tự" })
    .trim(),
});
