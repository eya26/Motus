# Motus

## The game
"Motus" is a word puzzle game where the player's objective is to guess a secret word within a certain number of attempts. The game provides clues and feedback to help the player narrow down the possibilities and ultimately arrive at the correct word.

For example
you search for lions

the user send lotor
you send 10x0x

Where x is not good
and 1 is good
and 0 is not at the right position


The response should be like this

```javascript
{
    "word": "lotor",
    "response": "10X0x"
    "game": {}
}
``