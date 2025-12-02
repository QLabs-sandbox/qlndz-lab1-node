import { User } from "@prisma/client";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";

export const generateTokens = (user: User) => {
  const accessToken = signAccessToken({ userId: user.id, role: user.role });
  const refreshToken = signRefreshToken({ userId: user.id, role: user.role });

  return { accessToken, refreshToken };
};

export const buildUserResponse = (
  user: User,
  accessToken: string,
  refreshToken: string
) => ({
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
  accessToken,
  refreshToken,
});
