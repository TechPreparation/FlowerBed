/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let i = 0;
    let length = flowerbed.length;
    
    while(i < length) {
        var b1 = flowerbed[i] === 0;
        var b2 = i == 0 || flowerbed[i-1] === 0;
        var b3 = flowerbed[i+1] ===0 || i == length-1
        
        if(b1 && b2 && b3) {
            flowerbed[i] = 1;
            n--;
        }
        
        i++;
    }
    
    return n <=0;
};

const flowerbed = [1,0,0,0,1]
console.log('The Answer is :', canPlaceFlowers(flowerbed, 1));