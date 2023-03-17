import bcrypt from 'bcrypt';
const saltRounds = String(process.env.SALT_ROUNDS);

export async function hashPwd(password: string): Promise<string> {
  const hashedPwd = await bcrypt.hash(password, parseInt(saltRounds));
  return hashedPwd;
}

export async function checkPwd(
  existingPwd: string,
  pwdToCheck: string
): Promise<boolean> {
  return await bcrypt.compare(pwdToCheck, existingPwd);
}
