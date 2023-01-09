import { setDefinedProperties } from '@utils'
import { createSlice } from '@reduxjs/toolkit'

const initialState: MeteoriteSliceState = {
  mass: 11 * 10 ** 3,

  radius: 15,
  distance: 7 * 10 ** 4,

  initialVelocity: 7 * 10 ** 3,

  velocityVectorX: 0.8915682881953312,
  velocityVectorY: 0.4528862853790703,
}

export const meteoriteSlice = createSlice<MeteoriteSliceState, MeteoriteSlice>({
  name: 'meteorite',
  initialState,
  reducers: {
    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state, payload)
    },
  },
})

export const { setMeteoriteData, changeMeteoriteData } = meteoriteSlice.actions
