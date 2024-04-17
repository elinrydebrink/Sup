import type { ParentComponent } from 'solid-js'
import { Suspense } from 'solid-js'
import { A } from '@solidjs/router'
import { Button } from './components/ui/button'


const App: ParentComponent = (props) => (
  <>
    <A href="/"> Startsida </A>
    <Button>hejsan</Button>
    <A href="/schedule"> Schema </A>
    <A href="/apply"> Ansökan </A>
    <Suspense>{props.children}</Suspense>
  </>
)

export default App
