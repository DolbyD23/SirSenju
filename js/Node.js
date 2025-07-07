const fs = require('fs');
const abilities = JSON.parse(fs.readFileSync('full_senju_character_abilities.json'));
const characterData = require('./senju_characters_FULL.js').senjuLoreData;

Object.keys(abilities).forEach(character => {
    abilities[character].forEach(ability => {
        if (!ability.description || ability.description.trim() === '') {
            const charInfo = characterData.find(c => c.name === character) || { desc: '' };
            const keywords = ability.name.toLowerCase().split(' ');
            let desc = '';
            if (keywords.includes('barrier') || keywords.includes('shield') || keywords.includes('guard')) {
                desc = 'Creates a protective energy barrier.';
            } else if (keywords.includes('strike') || keywords.includes('slash') || keywords.includes('fist') || keywords.includes('kick')) {
                desc = 'Delivers a powerful energy attack.';
            } else if (keywords.includes('heal') || keywords.includes('restore') || keywords.includes('sooth')) {
                desc = 'Channels energy to heal allies.';
            } else if (keywords.includes('pulse') || keywords.includes('surge') || keywords.includes('wave')) {
                desc = 'Emits a powerful energy burst.';
            } else if (keywords.includes('cloak') || keywords.includes('veil') || keywords.includes('shroud')) {
                desc = 'Conceals with a stealth energy field.';
            } else {
                desc = 'Performs a unique energy technique.';
            }
            if (charInfo.desc.includes('healer') || charInfo.desc.includes('Light')) desc = desc.replace('energy', 'light energy');
            else if (charInfo.desc.includes('dark') || charInfo.desc.includes('shadow')) desc = desc.replace('energy', 'dark energy');
            else if (charInfo.desc.includes('fire') || charInfo.desc.includes('flame')) desc = desc.replace('energy', 'fire energy');
            else if (charInfo.desc.includes('wind') || charInfo.desc.includes('aerial')) desc = desc.replace('energy', 'wind energy');
            else if (charInfo.desc.includes('water') || charInfo.desc.includes('aquatic')) desc = desc.replace('energy', 'water energy');
            ability.description = desc;
        }
    });
});

fs.writeFileSync('updated_abilities.json', JSON.stringify(abilities, null, 2));