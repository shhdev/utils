import CryptoJS from 'crypto-js'

const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000')

const generateWordArray = (str: string) => {
  return CryptoJS.enc.Utf8.parse(str)
}

const generateKey = (password: string, salt: string) => {
  return CryptoJS.PBKDF2(generateWordArray(password), generateWordArray(salt), {
    keySize: 256 / 32
  })
}

const decrypt = (ciphertext: string, secret: string, salt: string) => {
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  })

  const key = generateKey(secret, salt)

  return CryptoJS.AES.decrypt(cipherParams, key, { iv }).toString(CryptoJS.enc.Utf8)
}

const encrypt = (message: string, secret: string, salt: string) => {
  const value = CryptoJS.enc.Utf8.parse(message)
  const key = generateKey(secret, salt)

  return CryptoJS.AES.encrypt(value, key, { iv }).ciphertext.toString(CryptoJS.enc.Base64)
}

const hash = (message: string, salt: string) => {
  const messageArray = generateWordArray(message + salt)

  return CryptoJS.SHA3(messageArray, { outputLength: 256 }).toString(CryptoJS.enc.Base64)
}

export { decrypt, encrypt, hash }
