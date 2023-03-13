import bcrypt from "bcrypt";

export const hashPwd = async (password: string) => {
  const hashedPwd = await bcrypt.hash(password, 20);
  return hashedPwd;
};
