[@cspell/cspell-types](../README.md) / [Exports](../modules.md) / LanguageSettingFilterFields

# Interface: LanguageSettingFilterFields

## Hierarchy

- [`LanguageSettingFilterFieldsPreferred`](LanguageSettingFilterFieldsPreferred.md)

- [`LanguageSettingFilterFieldsDeprecated`](LanguageSettingFilterFieldsDeprecated.md)

  ↳ **`LanguageSettingFilterFields`**

  ↳↳ [`LanguageSetting`](LanguageSetting.md)

## Table of contents

### Properties

- [languageId](LanguageSettingFilterFields.md#languageid)
- [local](LanguageSettingFilterFields.md#local)
- [locale](LanguageSettingFilterFields.md#locale)

## Properties

### languageId

• **languageId**: `string` \| `string`[]

The language id.  Ex: "typescript", "html", or "php".  "*" -- will match all languages.

#### Inherited from

[LanguageSettingFilterFieldsDeprecated](LanguageSettingFilterFieldsDeprecated.md).[languageId](LanguageSettingFilterFieldsDeprecated.md#languageid)

#### Defined in

[CSpellSettingsDef.ts:583](https://github.com/streetsidesoftware/cspell/blob/a151ccc/packages/cspell-types/src/CSpellSettingsDef.ts#L583)

___

### local

• `Optional` **local**: `string` \| `string`[]

Deprecated - The locale filter, matches against the language. This can be a comma separated list. "*" will match all locales.

**`deprecated`** true

**`deprecationmessage`** Use `locale` instead.

#### Inherited from

[LanguageSettingFilterFieldsDeprecated](LanguageSettingFilterFieldsDeprecated.md).[local](LanguageSettingFilterFieldsDeprecated.md#local)

#### Defined in

[CSpellSettingsDef.ts:596](https://github.com/streetsidesoftware/cspell/blob/a151ccc/packages/cspell-types/src/CSpellSettingsDef.ts#L596)

___

### locale

• `Optional` **locale**: `string` \| `string`[]

The locale filter, matches against the language. This can be a comma separated list. "*" will match all locales.

#### Inherited from

[LanguageSettingFilterFieldsPreferred](LanguageSettingFilterFieldsPreferred.md).[locale](LanguageSettingFilterFieldsPreferred.md#locale)

#### Defined in

[CSpellSettingsDef.ts:585](https://github.com/streetsidesoftware/cspell/blob/a151ccc/packages/cspell-types/src/CSpellSettingsDef.ts#L585)
