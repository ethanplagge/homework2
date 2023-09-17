import { setPageLayout } from "../model/model.js";

function initListeners(){
  $("nav .links a").on("click", (e) => {
    e.preventDefault();
    let linkID = e.currentTarget.id;
    console.log(linkID);
    setPageLayout(linkID);
  });
}

$(document).ready(function () {
  setPageLayout("home");
  initListeners();
});