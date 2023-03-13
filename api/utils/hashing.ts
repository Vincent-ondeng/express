import bcrypt from "bcrypt";

export async function hashPwd(password: string): Promise<string> {
  const hashedPwd = await bcrypt.hash(password, 10);
  return hashedPwd;
}

export async function checkPwd(
  existingPwd: string,
  pwdToCheck: string
): Promise<boolean> {
  return await bcrypt.compare(pwdToCheck, existingPwd);
}
