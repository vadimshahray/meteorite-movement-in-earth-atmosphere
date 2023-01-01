/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  invalidUserInputCount: number

  interactiveControlsValues: InteractiveControlsData

  isControlsDialogVisible: boolean
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  increaseInvalidUserInputCount(state: ConfigurationSliceState): void

  decreaseInvalidUserInputCount(state: ConfigurationSliceState): void

  setInteractiveControlValue(
    state: ConfigurationSliceState,
    action: PayloadAction<{
      control: InteractiveControls
      value: number
    }>,
  )

  setIsControlsDialogVisible(
    state: ConfigurationSliceState,
    action: PayloadAction<boolean>,
  ): void
}
