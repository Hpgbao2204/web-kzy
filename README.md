# Interactive Narrative Dress-up Game (Web-based)

## 1. Project Overview

This project is a web-based interactive narrative game designed to explore how personal decisions are influenced by data-driven suggestions, trends, and collective expectations.

The game adopts a dress-up interaction model as a familiar and intuitive interface, but its core purpose is not fashion or entertainment. Instead, it functions as a short-form experiential artifact that encourages players to reflect on their own decision-making processes under social and algorithmic pressure.

The project is intended as a one-time experience rather than a replayable or commercial product. Once completed, the game delivers its message and concludes.

---

## 2. Project Objectives

- Simulate decision-making under external pressure using a simple and accessible interaction model
- Visualize the tension between personal preference and crowd-driven optimization
- Deliver a clear interpretative outcome rather than a win/lose condition
- Ensure accessibility on both desktop and mobile devices via a responsive web interface

---

## 3. Target Platform

- Web browser (mobile-first design)
- Progressive Web App (PWA) support for mobile usage
- No native mobile application required

---

## 4. Gameplay Structure (High-level)

1. Introductory screen explaining the context
2. Character selection (Idol Male / Idol Female)
3. Sequential customization steps:
   - Hair selection
   - Shirt selection
   - Pants selection
   - Shoes selection
4. Result screen displaying:
   - Similarity score with predefined fan preferences
   - Interpretative narrative based on player choices

Each step presents the player with narrative text that introduces external pressure in the form of data, trends, or expectations.

---

## 5. Scoring and Interpretation Logic

A fixed set of “fan-preferred” options is defined internally.

- Hair: Pink
- Shirt: Red
- Pants: Brown
- Shoes: White

Scoring formula:

score = number of selections matching fan-preferred options (0–4)
percentage = (score / 4) * 100

The score is computed only after the player completes all four customization steps.
No intermediate score is shown to the player during the selection process.

---

## 6. Asset Structure and Naming Convention

All character rendering in this project is based on pre-designed image assets.
The system does not generate or draw characters procedurally.

### 6.1 Asset Format

- File format: PNG
- Background: Transparent
- Canvas size: Identical across all assets
- Pose: Fixed standing pose
- Orientation: Front-facing

Each clothing or accessory image is designed to align perfectly with its corresponding base model.

---

### 6.2 Folder and Naming Convention

Assets are grouped by character gender and item type.

Example naming format:

- Model files:
  - `Model nữ.png`
  - `Model nam.png`

- Hair:
  - `Nữ - tóc xanh.png`
  - `Nữ - tóc nâu.png`
  - `Nữ - tóc hồng.png`
  - `Nam - tóc xanh.png`
  - `Nam - tóc nâu.png`
  - `Nam - tóc hồng.png`

- Shirt:
  - `Nữ - áo vàng.png`
  - `Nữ - áo đỏ.png`
  - `Nữ - áo đen.png`
  - `Nam - áo vàng.png`
  - `Nam - áo đỏ.png`
  - `Nam - áo đen.png`

- Pants:
  - `Nữ - quần trắng.png`
  - `Nữ - quần xanh.png`
  - `Nữ - quần nâu.png`
  - `Nam - quần trắng.png`
  - `Nam - quần xanh.png`
  - `Nam - quần nâu.png`

- Shoes:
  - `Nữ - giày trắng.png`
  - `Nữ - giày tím.png`
  - `Nữ - giày nâu.png`
  - `Nam - giày trắng.png`
  - `Nam - giày tím.png`
  - `Nam - giày nâu.png`

This naming convention is intentionally explicit to simplify asset lookup and avoid ambiguity in code.

---

## 7. Character Rendering Strategy

### 7.1 Layer-based Rendering

Characters are rendered using a layered image approach.

Rendering order:
1. Base model (male or female)
2. Hair layer
3. Shirt layer
4. Pants layer
5. Shoes layer

All layers share the same canvas dimensions and are stacked using absolute positioning.

No scaling, rotation, or dynamic repositioning is applied at runtime.

---

### 7.2 Rendering Container

The character preview is rendered inside a fixed-size container.
All layers are positioned at the top-left corner of the container.

Example logic:

- The container defines the visual boundary
- Each image layer is positioned at (0, 0)
- Alignment is guaranteed by asset design rather than code correction

This approach ensures consistent appearance across different screen sizes and devices.

---

## 8. Step Configuration and Data-driven Flow

Each customization step is driven by a configuration object rather than hard-coded UI logic.

Each step defines:
- Step identifier (hair, shirt, pants, shoes)
- Narrative text
- Available options
- Asset mapping for each option

This allows:
- Easy modification of content
- Clear separation between logic and presentation
- Minimal changes when updating assets or narrative text

---

## 9. Result Interpretation Display

After completing all steps, the system displays a result screen containing:
- Final percentage score
- Interpretation text corresponding to the score range

The result screen does not include:
- Rewards
- Animations
- Rankings
- Performance comparison with other players

The interpretation is purely descriptive and reflective.

---

## 10. Design Constraints and Assumptions

- All assets are pre-aligned and manually verified
- No runtime correction for misalignment is implemented
- Only one pose per character is supported
- The project assumes a controlled asset pipeline

These constraints are intentional to reduce technical complexity and preserve conceptual clarity.

---

## 11. Scope Limitation

This project does not include:
- Character animation
- Free-form customization
- Save or replay incentives
- Data analytics or tracking

The scope is deliberately constrained to maintain focus on the narrative experience.
