import { normalizeStructTag } from "@mysten/sui.js/utils";

const SUI_COINTYPE = "0x2::sui::SUI";
const USDC_ET_COINTYPE =
  "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const USDT_ET_COINTYPE =
  "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN";
const SUILEND_POINTS_COINTYPE =
  "0x34fe4f3c9e450fed4d0a3c587ed842eec5313c30c3cc3c0841247c49425e246b::suilend_point::SUILEND_POINT";

export const NORMALIZED_SUI_COINTYPE = normalizeStructTag(SUI_COINTYPE);
export const NORMALIZED_USDC_ET_COINTYPE = normalizeStructTag(USDC_ET_COINTYPE);
export const NORMALIZED_USDT_ET_COINTYPE = normalizeStructTag(USDT_ET_COINTYPE);
export const NORMALIZED_SUILEND_POINTS_COINTYPE = normalizeStructTag(
  SUILEND_POINTS_COINTYPE,
);

// 128x128
export const LOGO_MAP = {
  [NORMALIZED_SUI_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_USDC_ET_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_USDT_ET_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_SUILEND_POINTS_COINTYPE]:
    "data:image/png;base64,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",
};

export const COINTYPE_COLOR_MAP = {
  [NORMALIZED_SUI_COINTYPE]: "#4DA2FF",
  [NORMALIZED_USDC_ET_COINTYPE]: "#2775CA",
  [NORMALIZED_USDT_ET_COINTYPE]: "#009393",
};

export const extractSymbolFromCoinType = (coinType: string) =>
  coinType.split("::").at(-1);

export const isSui = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_SUI_COINTYPE;
export const isSuilendPoints = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_SUILEND_POINTS_COINTYPE;
