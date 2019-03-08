// @flow

import type { GroupType, OptionType, OptionsType } from './types';

export const formatGroupLabel = (group: GroupType): string => group.label;

export const getOptionLabel = (option: OptionType): string => option.label;

export const getOptionValue = (option: OptionType): string => option.value;

export const getGroupOptions = (option: GroupType | OptionType): ?OptionsType => option.options;

export const isOptionDisabled = (option: OptionType): boolean =>
  !!option.isDisabled;
