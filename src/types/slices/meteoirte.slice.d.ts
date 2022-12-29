type MeteoriteSliceState = MeteoriteModel

interface MeteoriteSlice extends SliceCaseReducers<MeteoriteSliceState> {
  setMeteoriteData(
    state: MeteoriteSliceState,
    action: PayloadAction<Partial<MeteoriteModel>>,
  ): void

  changeMeteoriteData(
    state: MeteoriteSliceState,
    action: PayloadAction<{
      property: keyof MeteoriteModel
      value: number
    }>,
  ): void
}
