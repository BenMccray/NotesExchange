import * as bcrypt from "bcrypt";

const verifyPassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

export default verifyPassword;