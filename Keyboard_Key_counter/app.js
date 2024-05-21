document.addEventListener("DOMContentLoaded", () => {
  let hit_node = document.getElementById("hits_count");

  if (hit_node) {
    let hits = 0;
    hit_node.innerText = hits;

    document.addEventListener("keypress", addHits);

    function addHits() {
      hits++;
      hit_node.innerText = hits;
    }
  }
});
