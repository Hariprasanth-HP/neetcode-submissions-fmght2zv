class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length
        let pref = new Array(length).fill(1)
        let suff = new Array(length).fill(1)
        let result = new Array(length).fill(1)
        for(let i=1;i<length;i++){
pref[i]=pref[i-1]*nums[i-1]
        }
         for(let i=nums.length-2;i>=0;i--){
            console.log(i,suff[i])
            suff[i]=suff[i+1]*nums[i+1]
        }
        for (let i=0;i<length;i++){
result[i]=pref[i]*suff[i]
        }
        console.log(pref,suff,result)
        return result
    }
}
