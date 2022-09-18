# @shhdev/utils

Shared utilities used across shh packages to create a unified experience.

## Functions

### `encrypt`

Creates an encrypted string from an input using a secret string and a salt string

| Property | Type | Required | Description |
|---|---|---|---|
| `value` | string | true | Value to encrypt |
| `secret` | string | true | Secret key used to encrypt |
| `salt` | string | true | Salt value used to provide randomness |

### `decrypt`

Decrypts an encrypted string with the secret string and salt string that were used to create it

| Property | Type | Required | Description |
|---|---|---|---|
| `value` | string | true | Value to encrypt |
| `secret` | string | true | Secret key used to encrypt |
| `salt` | string | true | Salt value used to provide randomness |

### `hash`

Creates a hashed string from an input string and salt string which can be used to compare to another hashed value

| Property | Type | Required | Description |
|---|---|---|---|
| `value` | string | true | Value to hash |
| `salt` | string | true | Salt value used to provide randomness |
