import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mygames')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mygames"!</div>
}
