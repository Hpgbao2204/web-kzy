export type Gender = 'male' | 'female';

export type HairColor = 'xanh' | 'nâu' | 'hồng';
export type ShirtColor = 'vàng' | 'đỏ' | 'đen';
export type PantsColor = 'trắng' | 'xanh' | 'nâu';
export type ShoesColor = 'trắng' | 'tím' | 'nâu';

export type StepId = 'intro' | 'gender' | 'hair' | 'shirt' | 'pants' | 'shoes' | 'result';

export interface Choice {
  id: string;
  label: string;
  color: string;
  assetName: string;
}

export interface Step {
  id: StepId;
  title: string;
  description: string;
  choices: Choice[];
}

export interface GameState {
  currentStep: StepId;
  gender: Gender | null;
  hair: HairColor | null;
  shirt: ShirtColor | null;
  pants: PantsColor | null;
  shoes: ShoesColor | null;
  score: number;
  
  // Actions
  setGender: (gender: Gender) => void;
  setHair: (hair: HairColor) => void;
  setShirt: (shirt: ShirtColor) => void;
  setPants: (pants: PantsColor) => void;
  setShoes: (shoes: ShoesColor) => void;
  nextStep: () => void;
  previousStep: () => void;
  calculateScore: () => void;
  reset: () => void;
}
