class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = [...new Set(nums)].sort((a,b)=>a-b)
        if(!uniqueNums.length) return 0
        if(uniqueNums.length===1) return 1
        let longestNum = [uniqueNums[0]]
        let length = 0
        for (let i=1;i<uniqueNums.length;i++){
            if(uniqueNums[i]-1===uniqueNums[i-1]){
longestNum.push(uniqueNums[i])
            }
            else{
                longestNum = [uniqueNums[i]]
            }
            length = longestNum.length>length? longestNum.length:length
        }

        return length
    }
}
