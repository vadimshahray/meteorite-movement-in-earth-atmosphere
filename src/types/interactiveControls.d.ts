type MeteoriteInteractiveControls =
  | '@MeteoriteRadiusControl'
  | '@MeteoriteDistanceControl'

type InteractiveControls = MeteoriteInteractiveControls

type InteractiveControlsData = Record<InteractiveControls, number>
