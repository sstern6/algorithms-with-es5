// Insertion Sort ES5
var insertionSort = function(nums) {
  for(var i = 1; i < nums.length; i++){
    current = nums[i];
    currentPosition = i;
    while(nums[currentPosition-1] > current) {
      nums[currentPosition] = nums[currentPosition-1];
      currentPosition = currentPosition - 1;
      nums[currentPosition] = current;
    }
  }
}
// insertionSort([32,45,12,0,7,29]);
