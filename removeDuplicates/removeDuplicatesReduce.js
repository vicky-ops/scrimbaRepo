const removeDuplicateValues=(array)=>{
	return array.reduce((accumulator,value)=>{
		return accumulator.includes(value) ? accumulator : [...accumulator,value]

	},[])
}
consol.log(removeDuplicateValues(["one", "two", "one", "three", "three", "two"]))
// ['one','two','three'] 