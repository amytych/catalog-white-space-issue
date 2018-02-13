import { markdown } from "catalog"

export default () => markdown`
  > Button

  ~~~react
  state: {clicked: 0}
  ---
  <Button onClick={() => setState({clicked: state.clicked + 1})}>
  Clicked {state.clicked} times
  </Button>
  ~~~
`
