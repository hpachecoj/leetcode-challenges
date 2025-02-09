/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left = null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}



var inorderTraversal = function(root) {
    let result = []
    function traverse(node){
        if(node !== null){
            traverse(node.left) //1. Visitar a subárvore esquerda
            result.push(node.val) //2. Visitar o nó atual
            traverse(node.right) //3. Visitar a subárvore direita
        }
    }
    traverse(root)
    return result
};


//Testando a função 
let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)



var solution = function(){
    var inorderTraversal = function(){
        let res = []
        let stack = []
        let curr = root
        while(curr !== null || stack.length !== 0){
            while(curr !== null){
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            res.push(curr.val)
            curr = curr.right
        }
        return res
    }
}
