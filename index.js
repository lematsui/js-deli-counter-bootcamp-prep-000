function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"; 
  }
}

function currentLine(theLine) {
  var thePeople = [];
  if (theLine.length > 0) {
    for (var i = 0; theLine.length > i; i++) {
      thePeople = thePeople + (i + 1) + ". " + theLine[i] + ", ";
    }
    var message = "The line is currently: " + thePeople;
    return message.replace(',','');
    }
   else {
    return "The line is currently empty."
  }
}
    


    
  
  



  
