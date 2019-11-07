var chocolateBars= ['snickers', 'hundred grand ', 'kitkat', 'skittles'];


//Adding an element to the beginning of an array______________
function addElementToBeginningOfArray(array, element) {
  
  var newArray = [ element, ...array]

  return( newArray)

}

function destructivelyAddElementToBeginningOfArray(array, element) {

 array.unshift(element)
 
 return array
}


//Adding an element at the end of an array____________________
function addElementToEndOfArray(array, element) {
  
  var newArray = [ ...array, element]

  return( newArray)

}

function destructivelyAddElementToEndOfArray(array, element) {

 array.push(element)
 
 return array
}


//Accessing an array__________________________________________
function accessElementInArray(array, index){
  
  return array[index]
}


//Removing an Array___________________________________________
function d