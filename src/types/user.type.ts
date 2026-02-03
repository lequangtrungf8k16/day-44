// Cấu trúc dữ liệu user
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

// Loại bỏ mật khẩu khi trả về client
export type UserResponse = Omit<User, "password">;
