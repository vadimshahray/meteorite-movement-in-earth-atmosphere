type MeteoriteSliceState = {
  data: MeteoriteModel
}

interface MeteoriteSlice extends SliceCaseReducers<MeteoriteSliceState> {
  setMeteoriteData(
    state: MeteoriteSliceState,
    action: PayloadAction<Partial<MeteoriteModel>>,
  ): void
}
