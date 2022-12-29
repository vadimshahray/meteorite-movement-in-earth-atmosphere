type MeteoriteSliceState = MeteoriteModel

interface MeteoriteSlice extends SliceCaseReducers<MeteoriteSliceState> {
  setMeteoriteData(
    state: MeteoriteSliceState,
    action: PayloadAction<
      Partial<
        Omit<MeteoriteModel, 'velocityVector'> & {
          velocityVector: Partial<Vector3>
        }
      >
    >,
  ): void

  changeMeteoriteDistance(
    state: MeteoriteSliceState,
    action: PayloadAction<number>,
  ): void
}
