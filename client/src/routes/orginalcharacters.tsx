import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orginalcharacters')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/orginalcharacters"!</div>
}
