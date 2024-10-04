# js_practice

Here I save my important practice codes I write in JS that I may need in future to look back and improve

objects{
Dot Notation (.)
Use when the property name is known and valid as an identifier (e.g., no spaces, special characters, or numbers at the start).

Dot Notation (.):

Can only be used with valid identifiers (letters, numbers, underscores, and dollar signs).
Cannot be used if the key is a number or contains special characters.

Bracket Notation ([]):

Can be used with any string, including those with special characters or numbers.
Allows for dynamic property access using variables.

summary{
when exactly know there is a propertt with a certain valid key you can use object.key method otherwise not.
bracket notation is standard method when searching dynamic properties of an object and you are not sure about the existence of a key. object[key];
obj.arr[key]=> search for a property with name arr in ojb instead taking value arr[key]
obj[arr[key]]=> first calculates arr[key] then proceed.
means . notation doesnt allow you use variable as keys but [] does.
Static property=> obj.key
Dynamic property=> obj[key]

Poperty=> A property is a value associated with an object.
Key=> A key is the name used to access a specific property in an object.
It means property=>key:value (key + value; makes property)

}
}
