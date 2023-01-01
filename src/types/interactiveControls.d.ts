type MeteoriteInteractiveControls =
  | '@MeteoriteRadiusControl'
  | '@MeteoriteDistanceControl'
  | '@MeteoriteVelocityVectorControl'

type InteractiveControls = MeteoriteInteractiveControls

type InteractiveControlsData = Record<InteractiveControls, number>
