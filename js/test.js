function checkForSpam(message) {
  let result;
  result =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');
  return result;
}

console.log(checkForSpam('spahjk'));
