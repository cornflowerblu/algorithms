import { longString1, longString2 } from "./constants/long-strings";

function isValidAnagram(firstString: string, secondString: string) {
  const start = performance.now();
  if (firstString.length !== secondString.length) {
    console.log("Strings are not the same length... aborting.");
    return false;
  }

  let charSum1 = 0;
  let charSum2 = 0;

  for (let i = 0; i < firstString.length; i++) {
    charSum1 += firstString.charCodeAt(i);
    charSum2 += secondString.charCodeAt(i);
  }

  charSum1 == charSum2 ? console.log("match found") : console.log("no match");
  const end = performance.now();
  console.log(`Started at: ${start} and ended at: ${end}`);
  return charSum1 == charSum2 ? true : false;
}

isValidAnagram(longString1, longString2);
