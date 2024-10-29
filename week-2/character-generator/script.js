/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:     Exenreco Bell
  Date:       October 29, 2024
  Filename:   index.html
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return (function() {
    let
      characterName, characterGender, characterClassType,
      characterTypeEmojis, emoji = undefined;

    characterName       = name,
    characterGender     = gender,
    characterClassType  = characterClass;

    // list of emoji for players based on class type and gender (not required)
    characterTypeEmojis  = {
      male:   { warrior: '🧌', rogue: '🦹‍♂️', mage: '🧙‍♂️', empty: '🎖️' },
      other:  { warrior: '🧛', rogue: '🦸', mage: '🔮', empty: '🛡️' },
      unset:  { warrior: '⚔️', rogue: '🥷', mage: '🎇', empty: '🧞' },
      female: { warrior: '🧝', rogue: '🦹‍♀️', mage: '🧚‍♀️', empty: '🗡️' },
    };

    return {
      getName: function() {
        return characterName;
      },
      getGender: function() {
        return characterGender;
      },
      getClass: function() {
        return characterClassType;
      },
      getPlayerEmoji: function() {
        emoji = ( characterGender && characterGender in characterTypeEmojis )
        ? // gender is set, use gender base emoji
          ( characterClassType && characterClassType in characterTypeEmojis[characterGender] )
          ? // add character emoji
            characterTypeEmojis[characterGender][characterClassType]
          : // type not found, set empty emoji
            characterTypeEmojis[characterGender].empty
        : // gender is not set, use none gender base emojis
          ( characterClassType && characterClassType in characterTypeEmojis.unset )
          ? // add character emoji
            characterTypeEmojis.unset[characterClassType]
          : // type not found, set empty emoji
            characterTypeEmojis.unset.empty

        return emoji;
      },
    };
  })();
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  let heroName, heroGender, heroClass, character, renderEl;

  // TODO: Get form values
  heroName      = document.getElementById('heroName').value,
  heroGender    = document.getElementById('heroGender').value,
  heroClass     = document.getElementById('heroClass').value,
  renderEl      = document.getElementById('characterOutput');

  // TODO: Create character
  character = createCharacter(heroName, heroGender, heroClass);

  // TODO: Display character information
  renderEl.innerHTML = `<section class="registered-player">
    <h3 class="heading">Welcome Player - #${Math.floor(Math.random() * 100000)}</h3><br/>
    <table>
      <tr>
        <th>Player</th>
        <th>Details</th>
      </tr>
      <tr>
        <td><i class="icon">${character.getPlayerEmoji()}</i></td>
        <td>
          <ol>
            <li><b><i>Name:</b> ${character.getName()}</i></li>
            <li><b><i>Gender:</b> ${character.getGender()}</i></li>
            <li><b><i>Class:</b> ${character.getClass()}</i></li>
          </ol>
        </td>
      </tr>
    </table>
  </section>
  <span class='footer-menu'>
    <button>Continue &#8594;</button>
  </span>`;
});