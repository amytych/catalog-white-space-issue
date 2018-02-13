import React from "react"
import ReactDOM from "react-dom"
import { Catalog, pageLoader } from "catalog"

const pages = [
  {
    path: "/",
    title: "Button",
    content: pageLoader(() => import("./Button.js")),
    imports: {
      Button: require("../components/Button.js"),
    },
  },
]

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
)
