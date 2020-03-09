// 1029. 两地调度
// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。

// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

 

// 示例：

// 输入：[[10,20],[30,200],[400,50],[30,20]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 50。
// 第四个人去 B 市，费用为 20。

// 最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。
 

// 提示：

// 1 <= costs.length <= 100
// costs.length 为偶数
// 1 <= costs[i][0], costs[i][1] <= 1000

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let astack = []
  let bstack = []
  let total = 0
  for(let i=0; i<costs.length; i++){
    const a = costs[i][0]
    const b = costs[i][1]
    const dif = Math.abs(a - b)
    const min = Math.min(a,b)
    if(a > b) astack.push(dif)
    else bstack.push(dif)
    total += min
  }
  if(bstack.length > astack.length) [astack,bstack] = [bstack, astack]

  astack.sort((a,b)=> a-b)
    let gap = (astack.length - bstack.length) /2
  while(gap --){
    total += astack.shift()
  }
  return total
};