import { decrypt, encrypt, hash } from '.'

const value = 'I am a value to test'
const secret = '8b211be1-bc73-4806-836a-ead4c14c48b7'

describe('utilities', () => {
  const encrypted = encrypt(value, secret)
  const decrypted = decrypt(encrypted, secret)

  it('should encrypt', () => {
    expect(encrypted).toEqual(
      'e2e73a777fad4b384b3a2ba591898ad147eee45db9886606584779dbb3941fb4'
    )
  })

  it('should decrypt', () => {
    expect(decrypted).toEqual(value)
  })

  it('should hash', () => {
    const one = hash(value)
    const two = hash(value)

    expect(one).toBe(two)
  })
})
