function ready () {
    console.log("Document Ready")
    weaponforge.onclick = function() {
        console.log("Clicked");
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
        itemdesc.innerHTML = "Forged by " + findforgername() + ", the " + findforgeradj() + " " + findforgerrace() + ", this " + findweaponcolor() + " weapon " + findfeature(); + "."


    }
}

function findrandomweapon() {
    randnum = Math.floor(Math.random() * Math.floor(15));
    if ((randnum % 15) == 0) {
        return "greatsword";
    }
    if ((randnum % 15) == 1) {
        return "battle axe";
    }
    if ((randnum % 15) == 2) {
        return "greatclub";
    }
    if ((randnum % 15) == 3) {
        return "rapier";
    }
    if ((randnum % 15) == 4) {
        return "glaive";
    }
    if ((randnum % 15) == 5) {
        return "spear";
    }
    if ((randnum % 15) == 6) {
        return "javelin";
    }
    if ((randnum % 15) == 7) {
        return "maul";
    }
    if ((randnum % 15) == 8) {
        return "trident";
    }
    if ((randnum % 15) == 9) {
        return "dagger";
    }
    if ((randnum % 15) == 10) {
        return "flail";
    }
    if ((randnum % 15) == 11) {
        return "longbow";
    }
    if ((randnum % 15) == 12) {
        return "shortbow";
    }
    if ((randnum % 15) == 13) {
        return "crossbow";
    }
    if ((randnum % 15) == 14) {
        return "quarterstaff";
    }
}

function findrandomprefix() {
    randnum = Math.floor(Math.random() * Math.floor(15));
    if ((randnum % 15) == 0) {
        return "Wavy";
    }
    if ((randnum % 15) == 1) {
        return "Terrifying";
    }
    if ((randnum % 15) == 2) {
        return "Morphing";
    }
    if ((randnum % 15) == 3) {
        return "Bloodlusting";
    }
    if ((randnum % 15) == 4) {
        return "Terriffic";
    }
    if ((randnum % 15) == 5) {
        return "Fearsome";
    }
    if ((randnum % 15) == 6) {
        return "Bent";
    }
    if ((randnum % 15) == 7) {
        return "Cursed";
    }
    if ((randnum % 15) == 8) {
        return "Peculiar";
    }
    if ((randnum % 15) == 9) {
        return "Lightened";
    }
    if ((randnum % 15) == 10) {
        return "Useless";
    }
    if ((randnum % 15) == 11) {
        return "Villainous";
    }
    if ((randnum % 15) == 12) {
        return "Proper";
    }
    if ((randnum % 15) == 13) {
        return "Clumsy";
    }
    if ((randnum % 15) == 14) {
        return "Deadly";
    }
}

function findrandommundane() {
    randnum = Math.floor(Math.random() * Math.floor(6));
    if ((randnum % 6) == 0) {
        return "of the goblin";
    }
    if ((randnum % 6) == 1) {
        return "of good";
    }
    if ((randnum % 6) == 2) {
        return "of dullness";
    }
    if ((randnum % 6) == 3) {
        return "of rust";
    }
    if ((randnum % 6) == 4) {
        return "of the ogre";
    }
    if ((randnum % 6) == 5) {
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