import { decrypt, encrypt, hash } from '.'

const value = 'I am a value to test'
const secret = '8b211be1-bc73-4806-836a-ead4c14c48b7'
const salt = 'cl879zjuf000009mda8lub0fi'
const altSalt = 'cl87ahy2o000009mvh93ccaod'

describe('Crypto', () => {
  const encrypted = encrypt(value, secret, salt)
  const altEncrypted = encrypt(value, secret, altSalt)
  const decrypted = decrypt(encrypted, secret, salt)
  const altDecrypted = decrypt(altEncrypted, secret, altSalt)

  it('should decrypt', () => {
    expect(decrypted).toBe(value)
    expect(altDecrypted).toBe(value)
  })

  it('should salt', () => {
    expect(encrypted).not.toBe(altEncrypted)
  })

  it('should hash', () => {
    const one = hash(value, salt)
    const two = hash(value, salt)
    const three = hash(value, altSalt)

    expect(one).toBe(
      'gXva3iBkWcGrW6zGSXPx3qAvyRotmihyWiXkMiLL0IU='
    )
    expect(three).toBe(
      'MidHFU7B37a10gDP81tc+rd1AGCv8fEQk/G8VwpV6sk='
    )

    expect(one).toBe(two)
    expect(one).not.toBe(three)
  })
})
