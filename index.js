
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
  var musicianString;
  var musicianInstrument = []; 
  for (var i = 0; i< musicians.length; i++) {
    musicianString = musicians[i] + `plays` + instruments[i];
    musicianInstrument[i] = musicianString
  }
  return musicianInstrument;
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a chois boy and boy scout",
    "He hated the sound of his own voice"];
function johnLennonFacts(facts){
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a chois boy and boy scout",
    "He hated the sound of his own voice"];
    let i = facts[0]
    while (i< facts[4]){console.log(`${i}` + `!!!`);
    i += 1}
    return facts
}

function iLoveTheBeatles(num){
  do {num += 1} while(num < `15`)
  return strings
}