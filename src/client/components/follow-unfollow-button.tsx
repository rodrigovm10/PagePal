import { Button } from './ui/button'

export function FollowUnfollowUserButton({
  typeButton
}: {
  typeButton:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'tag'
    | null
    | undefined
}) {
  return <Button variant={typeButton}>Seguir</Button>
}
