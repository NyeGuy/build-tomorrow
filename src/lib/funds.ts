import { DT_FUND_URL, TECH_FUND_URL } from '../../content/funds';

export type FundKey = 'TECH_FUND_URL' | 'DT_FUND_URL';

export function fundUrl(key: FundKey | string | null | undefined): string {
  if (key === 'DT_FUND_URL') return DT_FUND_URL;
  return TECH_FUND_URL;
}

export { DT_FUND_URL, TECH_FUND_URL };
