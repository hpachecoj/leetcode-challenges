/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2){
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let result = new Set([...set1].filter(item => set2.has(item)))
    return Array.from(result)
    
}

console.log(intersection([1, 2, 2, 1], [2, 2]));  // Saída: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));  // Saída: [9, 4] ou [4, 9]








