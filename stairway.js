function num_ways_bottom_up(n) {
  if (n === 0 || n === 1) return 1;
  let nums = []  
  nums[0] = 1; 
  nums[1] = 1;
  
  for (let i = 2; i <= n; i++) { 
    nums[i] = nums[i - 1] + nums[i - 2]
  }
  return nums[n]
}

console.log(num_ways_bottom_up(3))

function num_ways_x_bottom_up(n, steps) {
  if (n === 0 || n === 1) return 1;
  let nums = []
  nums[0] = 1
  for(let i = 1; i <= n; i++) { // itera sobre cada degrau de 1 até n - ele representa o degrau atual para o qual queremos calcular o número de maneiras de alcançá-lo.
    let total = 0 
    for (let step of steps) { // itera sobre os passos permitidos - para cada degrau i, ele verifica quais dos passos permitidos poodem ser usados para alcançar esse degrau a partir de um degrau anterior (i - step).
      if (i - step >= 0) {
        total += nums[i - step]
      }
    }
    nums[i] = total // quantidade de maneiras de alcançar o degrau i
  }
  return nums[n]
}

console.log(num_ways_x_bottom_up(4, [1, 3, 5]))