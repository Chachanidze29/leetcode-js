/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {
    return solve(nums, 0, nums.length - 1);
};

let solve = (nums,start,end) => {
    if(start > end) return null;

    let mid = start + Math.floor((end-start)/2);
    let root = new TreeNode(nums[mid]);
    root.left = solve(nums,start,mid-1);
    root.right = solve(nums,mid+1,end);
    return root;
}