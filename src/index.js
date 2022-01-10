"use strict";

const root = document.getElementById("root");
const divTag = document.createElement("div");
const outLine = divTag.setAttribute("class", "total-view-port");
const inLine = divTag.setAttribute("class", "inner-view-port");

const board = root.appendChild(divTag);
