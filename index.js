const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  // Your code goes here
  try {
    const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
    const poem2FileName = `poems/${mostFrequentWord(poem1)}.txt`;
    console.log(poem2FileName);
  } catch (error) {
    throw error;
  };
  try {
    const poem2 = await readFile('poems/happy.txt', "utf-8");
    const poem3FileName = `poems/${mostFrequentWord(poem2)}.txt`;
    console.log(poem3FileName);
  } catch (error) {
    throw error;
  };
  try {
    const poem3 = await readFile('poems/you.txt', "utf-8");
    const poem4FileName = `poems/${mostFrequentWord(poem3)}.txt`;
    console.log(poem4FileName);
  } catch (error) {
    throw error;
  };
}

findPassword();
