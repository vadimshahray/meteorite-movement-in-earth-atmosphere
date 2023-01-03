type MeteoriteInteractiveControls =
  | '@MeteoriteRadiusControl'
  | '@MeteoriteDistanceControl'
  | '@MeteoriteVelocityVectorControl'

type InteractiveControls = MeteoriteInteractiveControls

type InteractiveControl = {
  key: InteractiveControls
  value: number
}
