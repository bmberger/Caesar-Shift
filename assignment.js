var mapping = {
  "a": 0,  "b": 1,  "c": 2,  "d": 3,  "e": 4,
  "f": 5,  "g": 6,  "h": 7,  "i": 8,  "j": 9,
  "k": 10, "l": 11, "m": 12, "n": 13, "o": 14,
  "p": 15, "q": 16, "r": 17, "s": 18, "t": 19,
  "u": 20, "v": 21, "w": 22, "x": 23, "y": 24,
  "z": 25
}
var alphabet = Object.keys(mapping) 
/*
 * Shifts the given letter by a given length.
 * ----
 * Params:
 * > original - letter you'd like to shift
 * > shift - length to transpose letters by
 *
 * Returns:
 * > char - shifted letter
 */

function shiftLetter(original, shift) {
    var value = mapping[original];
    var shiftedValue = mapping[(value + shift) % 25];
    return alphabet[shiftedValue]
}

/*
 * Encrypts the given string using the Caesar cipher and the given length.
 * ----
 * Params:
 * > original - string you would like to encrypt
 * > shift - given transposition length
 *
 * Returns:
 * > string - the encrypted version of the given string using the given length
 */

function encryptCaesar(original, shift) {
    var shiftedString = ""
    for (var i = 0; i < original.length; i++) {
        shiftedString += shiftLetter(original[i], shift);
    }
    return shiftedString;
}

/*
 * Determines whether the first string is the encrypted version of the second with a given encryption length.
 * ----
 * Params:
 * > encrypted - given encryption
 * > shift - given transposition length
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess with given length
 */

function checkCaesarWithShift(encrypted, shift, guess) {
    guessEncrypted = encryptCaesar(shift, guess);
    return guessEncrypted === encrypted;
}

/*
 * Determines whether the first string is the encrypted version of the second.
 * Try to use checkCaesarWithShift!
 * ----
 * Params:
 * > encrypted - given encryption
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess
 */

function checkCaesar(encrypted, guess) {
    for(int i = 0; i < encrypted.length; i++){
        if checkCaesarWithShift(encrypted, i, guess) {
            return true;
        }
    }
    return false;
}
