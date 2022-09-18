import crypto from 'crypto'

const hashAlgo = 'sha256'
const encryptAlgo = 'aes256'
const inEnc = 'hex'
const outEnc = 'utf8'
const iv = Buffer.alloc(16)

const generateBuffer = (value: string) => {
  return Buffer.from(value, outEnc)
}

const generateKey = (secret: string, salt: string) => {
  return crypto.scryptSync(generateBuffer(secret), generateBuffer(salt), 32)
}

const decrypt = (value: string, secret: string, salt: string) => {
  const key = generateKey(secret, salt)
  const decipher = crypto.createDecipheriv(encryptAlgo, key, iv)

  return decipher.update(value, inEnc, outEnc) + decipher.final(outEnc)
}

const encrypt = (value: string, secret: string, salt: string) => {
  const key = generateKey(secret, salt)
  const cipher = crypto.createCipheriv(encryptAlgo, key, iv)

  return cipher.update(value, outEnc, inEnc) + cipher.final(inEnc)
}

const hash = (value: string, salt: string) => {
  return crypto.createHash(hashAlgo).update(generateBuffer(value)).update(generateBuffer(salt)).digest(inEnc)
}

export { decrypt, encrypt, hash }
