const state = {
  currentCircle: '',
  currentActIndex: null,
  currentWorldIndex: 1,
  currentCycle: 1,
  currentStage: {
    id: 0,
    name: null,
    text: null
  },
  currentCycleStage: null,
  transitionsTexts: false,
  isDream: false
}

const getters = {
  currentCircle: (state) => state.currentCircle,
  currentCycle: (state) => state.currentCycle,
  currentActIndex: (state) => state.currentActIndex,
  currentWorldIndex: (state) => state.currentWorldIndex,
  currentStage: (state) => state.currentStage,
  currentCycleStage: (state) => state.currentCycleStage,
  isTransitionsTexts: (state) => state.transitionsTexts,
  isDream: (state) => state.isDream
}

const mutations = {
  SET_WORLD_INDEX (state, data) {
    state.currentCircle = 'world'
    state.currentWorldIndex = data
  },
  SET_ACT_INDEX (state, data) {
    state.currentCircle = 'act'
    state.currentActIndex = data
  },
  SET_STAGE (state, data) {
    state.currentStage = data
    state.currentCircle = 'stage'
  },
  SET_CYCLE (state, data) {
    state.currentCycle = data
  },
  SET_CYCLE_STAGE (state, data) {
    state.currentCycleStage = data
    state.currentCircle = 'cycleStage'
  },
  SET_STAGE_CIRCLE (state) {
    state.currentCircle = 'stage'
  },
  SET_NO_CIRCLE (state) {
    state.currentCircle = ''
  },
  SET_NO_CYCLE_STAGE (state) {
    state.currentCycleStage = null
    state.currentCircle = ''
  },
  SET_TRANSITIONS_TEXTS (state, data) {
    state.transitionsTexts = data
  },
  SET_DREAM (state, data) {
    state.isDream = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
