setInterval(function() {
	const attachment = document.getElementsByClassName("attachment-1Vom9D");
  if (attachment.length < 1) return;
 	for(key in attachment) {
  	if (attachment[key].childNodes[1].firstChild.firstChild.innerHTML.endsWith(".mp3")) {
    	createPlayer(attachment[key].parentNode,attachment[key].childNodes[1].firstChild.firstChild);
    }
  }
},1000);

function createPlayer(mother,child) {
  const musicUrl = child.href;
  mother.innerHTML = "";

  const audio = document.createElement("audio");
  audio.controls = true;
  const source = document.createElement("source");
  source.src = musicUrl;
  source.setAttribute("type","audio/mpeg");
  audio.appendChild(source);
  mother.appendChild(audio);
}
