export interface DimensionScore { score: number; weight: number; }
export interface ValuationResult { totalScore: number; stage: string; valuationMin: number; valuationMax: number; breakdown: Record<string, number>; }

const DIMENSIONS = ['技术', '文档', '创新', '可实现性', '生态'];
const WEIGHTS = { '技术': 0.25, '文档': 0.2, '创新': 0.2, '可实现性': 0.15, '生态': 0.2 };

export function scoreProject(scores: Record<string, number>): ValuationResult {
  let total = 0;
  for (const [dim, score] of Object.entries(scores)) {
    const w = WEIGHTS[dim as keyof typeof WEIGHTS] ?? 0;
    total += score * w;
  }
  const stage = determineStage(total);
  const multipliers: Record<string, [number, number]> = {
    'PoC': [1.0, 1.0], 'Alpha': [3.0, 3.0], 'Beta': [6.0, 6.0], 'GA': [10.0, 10.0]
  };
  const [mult] = multipliers[stage] || [1.0, 1.0];
  return { totalScore: total, stage, valuationMin: total * mult * 100, valuationMax: total * mult * 500, breakdown: scores };
}

function determineStage(score: number): string {
  if (score >= 90) return 'GA';
  if (score >= 75) return 'Beta';
  if (score >= 50) return 'Alpha';
  return 'PoC';
}

export function baguaScore(scores: Record<string, number>): { total: number; trigrams: Record<string, number> } {
  const trigrams = ['乾', '坤', '震', '巽', '坎', '离', '艮', '兑'];
  const result: Record<string, number> = {};
  let total = 0;
  trigrams.forEach((t, i) => {
    const s = scores[t] ?? scores[trigrams[i]] ?? 50;
    result[t] = s;
    total += s;
  });
  return { total: total / 8, trigrams: result };
}
