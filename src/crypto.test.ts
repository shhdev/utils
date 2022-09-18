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

  it('should encrypt', () => {
    expect(encrypted).toBe(
      'cc7a8649dffe80ce33c10fc8194003bdcfafc4d88a896029bf8824265be77bdd'
    )

    expect(altEncrypted).toBe(
      '26411fbb989f4192405dd00008a76c695e3c4c820ed2dc280107b313ea7a6ec5'
    )
  })

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
      '6838a432d794902aabf6c7c5d8eccd77ddd39b67a1f06ebdad584ef06b90fe03'
    )
    expect(three).toBe(
      '311746c9128e4dd6b378b9fba589af403ca959ee363788f24d1cee1b05a1574e'
    )

    expect(one).toBe(two)
    expect(one).not.toBe(three)
  })
})
