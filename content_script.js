// create Load All Diffs button
// inspired by https://gist.github.com/juanca/5fd799c5b094e3e4f8b709cd101d7403#file-github_load_all_diffs-js
var btnLoadAllDiffs = document.createElement("div");
btnLoadAllDiffs.onclick = function () {
    document.querySelectorAll('.load-diff-button').forEach(node => node.click());
};

btnLoadAllDiffs.setAttribute("class", "btn btn-sm");
btnLoadAllDiffs.setAttribute("style", "float:left!important;");
btnLoadAllDiffs.textContent = "Load All Diffs";

// add into get pr-review-tools list
var pageheadActionsList = document.getElementsByClassName("pr-review-tools")[0];
pageheadActionsList.prepend(btnLoadAllDiffs);