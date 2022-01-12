Check an array of values to determine if you can visit each value in a single cycle.


function hasSingleCycle(array) {
 
	let visited =0
	let currentIdx =0
	
	while(visited < array.length){
		if(visited >0 && currentIdx ==0){return false}
		visited +=1
		currentIdx = getNext(currentIdx,array)
	}
	return currentIdx ==0
}

function getNext(currentIdx,array){
	 let jump = array[currentIdx]
	 nextIdx = (jump + currentIdx) % array.length
	
	return nextIdx >= 0? nextIdx: nextIdx + array.length
}
