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

  changeMeteoriteData(
    state: MeteoriteSliceState,
    action: PayloadAction<{
      property: keyof MeteoriteSliceState
      value: number
    }>,
  ): void
}
