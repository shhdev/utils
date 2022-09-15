import crypto from 'crypto'

const hashAlgo = 'sha256'
const encryptAlgo = 'aes256'
const inEnc = 'hex'
const outEnc = 'utf8'
const iv = Buffer.alloc(16)

const decrypt = (value: string, secret: string) => {
  const key = crypto.createHash(hashAlgo).update(secret).digest()
  const decipher = crypto.createDecipheriv(encryptAlgo, key, iv)

  return decipher.update(value, inEnc, outEnc) + decipher.final(outEnc)
}

const encrypt = (value: string, secret: string) => {
  const key = crypto.createHash(hashAlgo).update(secret).digest()
  const cipher = crypto.createCipheriv(encryptAlgo, key, iv)

  return cipher.update(value, outEnc, inEnc) + cipher.final(inEnc)
}

const hash = (value: string) => {
  return crypto.createHash(hashAlgo).update(value).digest(inEnc)
}

export { decrypt, encrypt, hash }
