import type { ParentComponent } from 'solid-js'
import { Suspense } from 'solid-js'
import { A } from '@solidjs/router'


const App: ParentComponent = (props) => (
  <>
    <A href="/"> Startsida </A>
    <A href="/schedule"> Schema </A>
    <A href="/apply"> Ansökan </A>
    <Suspense>{props.children}</Suspense>
  </>
)

export default App
