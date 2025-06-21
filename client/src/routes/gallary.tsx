import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallary')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gallary"!</div>
}
