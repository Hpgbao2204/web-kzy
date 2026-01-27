import { useGameStore } from '../store';

export default function CharacterPreview() {
  const { gender, hair, shirt, pants, shoes } = useGameStore();

  if (!gender) return null;

  const genderPrefix = gender === 'female' ? 'Nữ' : 'Nam';
  const genderPrefixLower = gender === 'female' ? 'nữ' : 'nam';
  const basePath = `${import.meta.env.BASE_URL}assets/${gender}`;

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-white/50 rounded-3xl shadow-lg overflow-hidden">
      {/* Base model */}
      <img
        src={`${basePath}/Model ${genderPrefixLower}.png`}
        alt="Base model"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Hair layer */}
      {hair && (
        <img
          src={`${basePath}/${genderPrefix} - tóc ${hair}.png`}
          alt={`Tóc ${hair}`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      {/* Shirt layer */}
      {shirt && (
        <img
          src={`${basePath}/${genderPrefix} - áo ${shirt}.png`}
          alt={`Áo ${shirt}`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      {/* Pants layer */}
      {pants && (
        <img
          src={`${basePath}/${genderPrefix} - quần ${pants}.png`}
          alt={`Quần ${pants}`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      {/* Shoes layer */}
      {shoes && (
        <img
          src={`${basePath}/${genderPrefix} - giày ${shoes}.png`}
          alt={`Giày ${shoes}`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}
    </div>
  );
}
