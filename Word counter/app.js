document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("input_text");
  let wordCount = document.getElementById("data_word_count");
  let characterCount = document.getElementById("data_character_count");
  let sentenceCount = document.getElementById("data_sentence_count");
  let paragraphCount = document.getElementById("data_paragraph_count");

  console.log("iam herer");
  if (input) {
        console.log("iam 222 herer");
    input.addEventListener("input", () => {
      if (input.value) {
        let wordsArray = input.value.split("").filter((word) => word != " ");
        console.log("wordsArray:", wordsArray);
        wordCount.innerText = wordsArray.length;
        console.log("wordsArray:", wordsArray.length);

        characterCount.innerText = input.value.length;

        const sentenceArray = input.value.split(".");
        sentenceCount.innerText = sentenceArray.length - 1;

        const paragraphArray = input.value
          .split("\n")
          .filter((p) => p.trim() != " ");
        paragraphCount.innerText = paragraphArray.length;
      } else {
        wordCount.innerText =
          characterCount.innerText =
          sentenceCount.innerText =
          paragraphCount.innerText =
            0;
      }
    });
  }
});
