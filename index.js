function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase())
  }
  function logWhisper(string) {
    console.log(string.toLowerCase())
  }
  function sayHiToHeadphonedRoommate(string){
const volume = (string === string.toUpperCase())    
if (string === "Let's have dinner together!"){return "I would love to!"}
if (volume === false){return "I can\'t hear you!"};
if (volume === true){return "YES INDEED!"};
  }