function ready () {
    statblock1.innerHTML = ""
    statblock2.innerHTML = ""
    statblock3.innerHTML = ""
    console.log("Document Ready")
    weaponforge.onclick = function() {
        console.log("Clicked");
        statblock1.innerHTML = "";
        statblock2.innerHTML = "";
        if (chosenweapon.value == "randwea") {
            forgedweapon.innerHTML = findrandomweapon();
        }
        else forgedweapon.innerHTML = (chosenweapon.value);
        prefix.innerHTML = findrandomprefix();
        if (chosenlevel.value == "randlev") {
            suffix.innerHTML = findrandomsuffix();
        }
        if (chosenlevel.value == "mundane") {
            suffix.innerHTML = findrandommundane();
        }
        if (chosenlevel.value == "common") {
            suffix.innerHTML = findrandomcommon();
        }
        if (chosenlevel.value == "uncommon") {
            suffix.innerHTML = findrandomuncommon();
        }
        if (chosenlevel.value == "rare") {
            suffix.innerHTML = findrandomrare();
        }
        if (chosenlevel.value == "wonderous") {
            suffix.innerHTML = findrandomwonderous();
        }
        if (chosenlevel.value == "legendary") {
            suffix.innerHTML = findrandomlegendary();
        }
        if (chosenlevel.value == "mythical") {
            suffix.innerHTML = findrandommythical();
        }
        itemdesc.innerHTML = "Forged by " + findforgername() + ", the " + findforgeradj() + " " + findforgerrace() + ", this " + findweaponcolor() + " weapon " + findfeature(); + ".";
    }
}

function findrandomweapon() {
    randnum = Math.floor(Math.random() * Math.floor(15));
    if ((randnum % 15) == 0) {
        statblock1.innerHTML = "» 2d6 slashing";
        return "greatsword";
    }
    if ((randnum % 15) == 1) {
        statblock1.innerHTML = "» 1d8 slashing"
        return "battle axe";
    }
    if ((randnum % 15) == 2) {
        statblock1.innerHTML = "» 1d8 bludgeoning"
        return "greatclub";
    }
    if ((randnum % 15) == 3) {
        statblock1.innerHTML = "» 1d8 piercing"
        return "rapier";
    }
    if ((randnum % 15) == 4) {
        statblock1.innerHTML = "» 1d10 slashing"
        return "glaive";
    }
    if ((randnum % 15) == 5) {
        statblock1.innerHTML = "» 1d6 piercing"
        return "spear";
    }
    if ((randnum % 15) == 6) {
        statblock1.innerHTML = "» 1d6 piercing"
        return "javelin";
    }
    if ((randnum % 15) == 7) {
        statblock1.innerHTML = "» 2d6 bludgeoning"
        return "maul";
    }
    if ((randnum % 15) == 8) {
        statblock1.innerHTML = "» 1d6 piercing"
        return "trident";
    }
    if ((randnum % 15) == 9) {
        statblock1.innerHTML = "» 1d4 piercing"
        return "dagger";
    }
    if ((randnum % 15) == 10) {
        statblock1.innerHTML = "» 1d8 bludgeoning"
        return "flail";
    }
    if ((randnum % 15) == 11) {
        statblock1.innerHTML = "» 1d8 piercing"
        return "longbow";
    }
    if ((randnum % 15) == 12) {
        statblock1.innerHTML = "» 1d6 piercing"
        return "shortbow";
    }
    if ((randnum % 15) == 13) {
        statblock1.innerHTML = "» 1d8 piercing"
        return "crossbow";
    }
    if ((randnum % 15) == 14) {
        statblock1.innerHTML = "» 1d6 bludgeoning"
        return "quarterstaff";
    }
}

function findrandomprefix() {
    randnum = Math.floor(Math.random() * Math.floor(15));
    if ((randnum % 15) == 0) {
        statblock2.innerHTML = "» When this weapon inflicts damage on a critical hit, deal 1d6 additional slashing damage to its target."
        return "Wavy";
    }
    if ((randnum % 15) == 1) {
        statblock2.innerHTML = "» As an action, this weapon's owner may attempt to terrify a creature they can see who must succeed agaisnt a dc12 wisdom saving throw or be terrified for 1 round."
        return "Terrifying";
    }
    if ((randnum % 15) == 2) {
        statblock2.innerHTML = "» When not being used in combat, this weapon appears as a household object (a rolling pin, the leg of a chair, etc.)"
        return "Morphing";
    }
    if ((randnum % 15) == 3) {
        statblock2.innerHTML = "» When this weapon inflicts damage on a critical hit, heal for all damage dealt to the target."
        return "Bloodlusting";
    }
    if ((randnum % 15) == 4) {
        statblock2.innerHTML = "» As an action, this weapon's user can inspire their allies to give them advantage on their next charisma or constitution check in the next hour"
        return "Terriffic";
    }
    if ((randnum % 15) == 5) {
        statblock2.innerHTML = "» This weapon is renowned for some terrible event. People regard its owner with heavy suspicion, but its owner gains advantage on intimidation checks."
        return "Fearsome";
    }
    if ((randnum % 15) == 6) {
        statblock2.innerHTML = "» This weapon is badly bent, and gets -2 on rolls to hit."
        return "Bent";
    }
    if ((randnum % 15) == 7) {
        statblock2.innerHTML = "» This weapon is imbued with a powerful curse. When its owner rolls above 20 to hit, the hit counts as a critical hit and deals 3d6 bonus necrotic damage. On a natural 1 to hit, 6d6 necrotic damage is dealt to its owner."
        return "Cursed";
    }
    if ((randnum % 15) == 8) {
        statblock2.innerHTML = "» This weapon is forged using long-forgotten techniques. Its damage ignores resistances and immunities, but it cannot be repaired if broken."
        return "Peculiar";
    }
    if ((randnum % 15) == 9) {
        statblock2.innerHTML = "» This weapon gets +1 to hit."
        return "Lightened";
    }
    if ((randnum % 15) == 10) {
        statblock2.innerHTML = "» When this weapon misses a hit against an enemy, its owner cannot move until the next round in combat."
        return "Useless";
    }
    if ((randnum % 15) == 11) {
        statblock2.innerHTML = "» This weapon deals 2d4 bonus psychic damage."
        return "Villainous";
    }
    if ((randnum % 15) == 12) {
        statblock2.innerHTML = "» This weapon's wielder gains advantage on charisma and wisdom saving throws."
        return "Proper";
    }
    if ((randnum % 15) == 13) {
        statblock2.innerHTML = "» This weapon deals -2 damage on normal strikes, but 3d10 bonus bludgeoning damage on critical strikes."
        return "Clumsy";
    }
    if ((randnum % 15) == 14) {
        statblock2.innerHTML = "» If this weapon reduces an enemy to 0 hit points, that enemy fails 2 death saving throws."
        return "Deadly";
    }
}

function findrandommundane() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of the goblin";
    }
    if ((randnum % 6) == 1) {
        statblock3.innerHTML = "» This weapon deals 1d4 radiant damage against targets of evil alignment."
        return "of good";
    }
    if ((randnum % 6) == 2) {
        statblock3.innerHTML = "» This weapon deals bludgeoning damage instead of its assigned damage type."
        return "of dullness";
    }
    if ((randnum % 6) == 3) {
        statblock3.innerHTML = "» Half of this weapon's damage is converted into poison damage."
        return "of rust";
    }
    if ((randnum % 6) == 4) {
        return "of the ogre";
    }
    if ((randnum % 6) == 5) {
        statblock3.innerHTML = "» This weapon deals 1d4 radiant damage against targets of good alignemt."
        return "of evil";
    }
}

function findrandomcommon() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of sharpness";
    }
    if ((randnum % 6) == 1) {
        return "of eons";
    }
    if ((randnum % 6) == 2) {
        return "of the North";
    }
    if ((randnum % 6) == 3) {
        return "of the South";
    }
    if ((randnum % 6) == 4) {
        return "of the East";
    }
    if ((randnum % 6) == 5) {
        return "of the West";
    }
}

function findrandomuncommon() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of warning";
    }
    if ((randnum % 6) == 1) {
        return "of high elves";
    }
    if ((randnum % 6) == 2) {
        return "of the dwarven army";
    }
    if ((randnum % 6) == 3) {
        return "of faith";
    }
    if ((randnum % 6) == 4) {
        return "of balance";
    }
    if ((randnum % 6) == 5) {
        return "of reaching";
    }
}

function findrandomrare() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of fire";
    }
    if ((randnum % 6) == 1) {
        return "of ice";
    }
    if ((randnum % 6) == 2) {
        return "of water";
    }
    if ((randnum % 6) == 3) {
        return "of air";
    }
    if ((randnum % 6) == 4) {
        return "of stone";
    }
    if ((randnum % 6) == 5) {
        return "of poison";
    }
}

function findrandomwonderous() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of truesight";
    }
    if ((randnum % 6) == 1) {
        return "of returning";
    }
    if ((randnum % 6) == 2) {
        return "of a thousand screams";
    }
    if ((randnum % 6) == 3) {
        return "of summoning demons";
    }
    if ((randnum % 6) == 4) {
        return "of madness";
    }
    if ((randnum % 6) == 5) {
        return "of paralysis";
    }
}

function findrandomlegendary() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of the Hero";
    }
    if ((randnum % 6) == 1) {
        return "of Bane";
    }
    if ((randnum % 6) == 2) {
        return "of Talos";
    }
    if ((randnum % 6) == 3) {
        return "of flying";
    }
    if ((randnum % 6) == 4) {
        return "of the Traveler";
    }
    if ((randnum % 6) == 5) {
        return "of the mindless";
    }
}

function findrandommythical() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of banishing";
    }
    if ((randnum % 6) == 1) {
        return "of the Great Old One";
    }
    if ((randnum % 6) == 2) {
        return "of Asmodeus";
    }
    if ((randnum % 6) == 3) {
        return "of decimation";
    }
    if ((randnum % 6) == 4) {
        return "of summoning fiends";
    }
    if ((randnum % 6) == 5) {
        return "of the Sphinx";
    }
}

function findrandomsuffix() {
    randnum = Math.floor(Math.random() * Math.floor(36));
    if ((randnum % 42) == 36) {
        return "of the goblin";
    }
    if ((randnum % 42) == 37) {
        return "of good";
    }
    if ((randnum % 42) == 38) {
        return "of dullness";
    }
    if ((randnum % 42) == 39) {
        return "of rust";
    }
    if ((randnum % 42) == 40) {
        return "of the ogre";
    }
    if ((randnum % 42) == 41) {
        return "of evil";
    }
    if ((randnum % 42) == 0) {
        return "of sharpness";
    }
    if ((randnum % 42) == 1) {
        return "of eons";
    }
    if ((randnum % 42) == 2) {
        return "of the North";
    }
    if ((randnum % 42) == 3) {
        return "of the South";
    }
    if ((randnum % 42) == 4) {
        return "of the East";
    }
    if ((randnum % 42) == 5) {
        return "of the West";
    }
    if ((randnum % 42) == 6) {
        return "of warning";
    }
    if ((randnum % 42) == 7) {
        return "of high elves";
    }
    if ((randnum % 42) == 8) {
        return "of the dwarven army";
    }
    if ((randnum % 42) == 9) {
        return "of faith";
    }
    if ((randnum % 42) == 10) {
        return "of balance";
    }
    if ((randnum % 42) == 11) {
        return "of reaching";
    }
    if ((randnum % 42) == 12) {
        return "of fire";
    }
    if ((randnum % 42) == 13) {
        return "of ice";
    }
    if ((randnum % 42) == 14) {
        return "of water";
    }
    if ((randnum % 42) == 15) {
        return "of air";
    }
    if ((randnum % 42) == 16) {
        return "of stone";
    }
    if ((randnum % 42) == 17) {
        return "of poison";
    }
    if ((randnum % 42) == 18) {
        return "of truesight";
    }
    if ((randnum % 42) == 19) {
        return "of returning";
    }
    if ((randnum % 42) == 20) {
        return "of a thousand screams";
    }
    if ((randnum % 42) == 21) {
        return "of summoning demons";
    }
    if ((randnum % 42) == 22) {
        return "of madness";
    }
    if ((randnum % 42) == 23) {
        return "of paralysis";
    }
    if ((randnum % 42) == 24) {
        return "of the Hero";
    }
    if ((randnum % 42) == 25) {
        return "of Bane";
    }
    if ((randnum % 42) == 26) {
        return "of Talos";
    }
    if ((randnum % 42) == 27) {
        return "of flying";
    }
    if ((randnum % 42) == 28) {
        return "of the Traveler";
    }
    if ((randnum % 42) == 29) {
        return "of the mindless";
    }
    if ((randnum % 42) == 30) {
        return "of banishing";
    }
    if ((randnum % 42) == 31) {
        return "of the Great Old One";
    }
    if ((randnum % 42) == 32) {
        return "of Asmodeus";
    }
    if ((randnum % 42) == 33) {
        return "of decimation";
    }
    if ((randnum % 42) == 34) {
        return "of summoning fiends";
    }
    if ((randnum % 42) == 35) {
        return "of the Sphinx";
    }
}

function findforgername() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "Edward";
    }
    if ((randnum % 6) == 1) {
        return "Dwight";
    }
    if ((randnum % 6) == 2) {
        return "Richard";
    }
    if ((randnum % 6) == 3) {
        return "Ralph";
    }
    if ((randnum % 6) == 4) {
        return "Samuel";
    }
    if ((randnum % 6) == 5) {
        return "Franklin";
    }
}

function findforgeradj() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "Hairy";
    }
    if ((randnum % 6) == 1) {
        return "Strong";
    }
    if ((randnum % 6) == 2) {
        return "Genius";
    }
    if ((randnum % 6) == 3) {
        return "Crippled";
    }
    if ((randnum % 6) == 4) {
        return "Ancient";
    }
    if ((randnum % 6) == 5) {
        return "Famous";
    }
}

function findforgerrace() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "Elf";
    }
    if ((randnum % 6) == 1) {
        return "Dwarf";
    }
    if ((randnum % 6) == 2) {
        return "Goblin";
    }
    if ((randnum % 6) == 3) {
        return "Mage";
    }
    if ((randnum % 6) == 4) {
        return "Human";
    }
    if ((randnum % 6) == 5) {
        return "Giant";
    }
}

function findweaponcolor() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "silver";
    }
    if ((randnum % 6) == 1) {
        return "gold";
    }
    if ((randnum % 6) == 2) {
        return "black";
    }
    if ((randnum % 6) == 3) {
        return "red";
    }
    if ((randnum % 6) == 4) {
        return "bronze";
    }
    if ((randnum % 6) == 5) {
        return "copper";
    }
}

function findfeature() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "has hundreds of tiny diamonds in its handle";
    }
    if ((randnum % 6) == 1) {
        return "glows faintly with pale light";
    }
    if ((randnum % 6) == 2) {
        return "speaks with a voice only its weilder can hear";
    }
    if ((randnum % 6) == 3) {
        return "slowly drives its owner into madness";
    }
    if ((randnum % 6) == 4) {
        return "feels as cold as ice";
    }
    if ((randnum % 6) == 5) {
        return "can cut through stone";
    }
}





console.log(findrandomweapon());

document.addEventListener("DOMContentLoaded", ready);