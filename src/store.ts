import { create } from 'zustand';
import { GameState, StepId } from './types';

const PREFERRED_CHOICES = {
  hair: 'hồng',
  shirt: 'đỏ',
  pants: 'nâu',
  shoes: 'trắng',
};

const stepOrder: StepId[] = ['intro', 'gender', 'hair', 'shirt', 'pants', 'shoes', 'result'];

export const useGameStore = create<GameState>((set, get) => ({
  currentStep: 'intro',
  gender: null,
  hair: null,
  shirt: null,
  pants: null,
  shoes: null,
  score: 0,

  setGender: (gender) => set({ gender }),
  setHair: (hair) => set({ hair }),
  setShirt: (shirt) => set({ shirt }),
  setPants: (pants) => set({ pants }),
  setShoes: (shoes) => set({ shoes }),

  nextStep: () => {
    const current = get().currentStep;
    const currentIndex = stepOrder.indexOf(current);
    if (currentIndex < stepOrder.length - 1) {
      const nextStep = stepOrder[currentIndex + 1];
      
      // Calculate score before showing result
      if (nextStep === 'result') {
        get().calculateScore();
      }
      
      set({ currentStep: nextStep });
    }
  },

  previousStep: () => {
    const current = get().currentStep;
    const currentIndex = stepOrder.indexOf(current);
    if (currentIndex > 0) {
      const prevStep = stepOrder[currentIndex - 1];
      set({ currentStep: prevStep });
    }
  },

  calculateScore: () => {
    const state = get();
    let matches = 0;
    
    if (state.hair === PREFERRED_CHOICES.hair) matches++;
    if (state.shirt === PREFERRED_CHOICES.shirt) matches++;
    if (state.pants === PREFERRED_CHOICES.pants) matches++;
    if (state.shoes === PREFERRED_CHOICES.shoes) matches++;
    
    const percentage = (matches / 4) * 100;
    set({ score: percentage });
  },

  reset: () => set({
    currentStep: 'intro',
    gender: null,
    hair: null,
    shirt: null,
    pants: null,
    shoes: null,
    score: 0,
  }),
}));
