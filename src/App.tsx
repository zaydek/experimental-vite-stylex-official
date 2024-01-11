import { create, props } from "@stylexjs/stylex"

const foo = create({
  foo: {
    color: "red",
  },
})

function App() {
  return (
    <div {...props(foo.foo)}>
      Hello, world!
    </div>
  )
}

export default App
