
// USS Assembly properties
let assembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
};

// Alien ship properties
let alienShips = [];
for (let i = 0; i < 6; i++) {
    alienShips.push({
        hull: Math.floor(Math.random() * 4) + 3,
        firepower: Math.floor(Math.random() * 3) + 2,
        accuracy: Math.random() * 0.2 + 0.6
    });
}

// Game loop
alert(`Earth has been attacked by a horde of aliens! 👾 
You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat🚀`);
let currentAlien = 0;
let retreat = false;
while (!retreat && currentAlien < alienShips.length) {
    let alien = alienShips[currentAlien];
    // Attack alien
    console.log(`Attacking alien ship ${currentAlien + 1} with Hull: ${alien.hull} Firepower: ${alien.firepower} Accuracy: ${alien.accuracy}`);
    if (Math.random() < assembly.accuracy) {
        alien.hull -= assembly.firepower;
        console.log(`HIT: Alien ship ${currentAlien + 1}'s hull is now at ${alien.hull}`);
    } else {
        console.log(`MISS: Alien ship ${currentAlien + 1}'s hull is still at ${alien.hull}`);
    }
    if (alien.hull <= 0) {
        console.log(`Alien ship ${currentAlien + 1} destroyed!`);
        currentAlien++;
        // Ask if player wants to retreat
        let choice = prompt(`Do you want to attack the next ship or retreat? (a/r)`);
        if (choice === 'r') {
            retreat = true;
        }
    } else {
        // Alien attacks
        if (Math.random() < alien.accuracy) {
            assembly.hull -= alien.firepower;
            console.log(`HIT: USS Assembly's hull is now at ${assembly.hull}`);
        } else {
            console.log(`MISS: USS Assembly's hull is still at ${assembly.hull}`);
        }
        if (assembly.hull <= 0) {
            console.log(`USS Assembly destroyed! Game over.`);
            alert(`GAME OVER. You lose!`);
            retreat = true;
        }
    }
}

if (!retreat) {
    console.log(`All alien ships destroyed! You win!`);
    alert(`All alien ships destroyed! You win!`);
}
