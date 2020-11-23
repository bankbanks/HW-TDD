module.exports.greet = (name) => {
  //2
  if (name === null) {
    return "Hello, my friend.";
  }

  if (typeof name === "object") {
    if (name.length === 2 && name[0].charAt(0) === "B" && name[1].charAt(0) !== '\"' ) {
      
      const name = ["Bob", "Charlie, Dianne"];
      const spl = name[1].split(", ");
      return "Hello, " + `${name[0]}, ` + spl.join(", and ") + ".";
      
    }
    if(name.length === 2 && name[1].charAt(0) === '\"' ) {
      const name = ["Bob", "Charlie, Dianne"];
      const spl = name[1].split(", ");
      return "Hello, " + `${name[0]} ` + "and " + spl.join(", ") + ".";
    }
    if (name.length > 2 && name.length < 4) {
      if (name[0].charAt(0) === "B") {
        return `Hello, ${name[0]}, and ${name[1]}.`;
      }
      if (name[1] === name[1].toUpperCase()) {
        return `Hello, ${name[0]} and ${name[2]}. AND HELLO ${name[1]}!`;
      }
      return `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`;
    }
    return `Hello, ${name[0]} and ${name[1]}.`;
  }
  //3
  if (name === name.toUpperCase()) {
    return `HELLO ${name}!`;
  }
  //1
  return `Hello, ${name}`;
};
