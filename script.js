// Problem 1
function color_pattern_times(colors) {
    var switches = 0;
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] !== colors[i - 1]) {
            switches += 1;
        }
    }
    return colors.length * 2 + switches;
}
console.log(color_pattern_times(['Red', 'Blue', 'Red', 'Blue', 'Red']));
console.log(color_pattern_times(['Blue']));
console.log(color_pattern_times(['Red', 'Yellow', 'Green', 'Blue']));
console.log(color_pattern_times(['Blue', 'Blue', 'Blue', 'Red', 'Red', 'Red']));

// Problem 2
function plant(seed, water, fert, temp) {
    var plant_vis = ('-'.repeat(water) + seed.repeat(fert)).repeat(water);
    if (temp < 20 || temp > 30) {
        plant_vis = '-'.repeat(plant_vis.length - 1) + seed;
    }
    return plant_vis;
}
// Log to console
console.log(plant('@', 3, 3, 25));
console.log(plant('#', 1, 5, 30));
console.log(plant('&', 5, 1, 20));
console.log(plant('§', 3, 3, 15));

