function makeBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyle() {
  var textArea = document.getElementById("textArea");
  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value.toUpperCase();

  // split on periods, add -MOO to last word of each sentence, rejoin
  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i];
    if (sentence.trim().length === 0) continue;
    var words = sentence.split(" ");
    var lastIdx = words.length - 1;
    while (lastIdx >= 0 && words[lastIdx].trim() === "") lastIdx--;
    if (lastIdx >= 0) words[lastIdx] = words[lastIdx] + "-MOO";
    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(".");
}
