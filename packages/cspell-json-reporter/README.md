# `@cspell/cspell-json-reporter`

> CSpell reporter with JSON output

## Usage

Add this to cSpell.json:

```
reporters: [
    ['@cspell/cspell-json-reporter', { outFile: 'out.json' }]
]
```

## Output file format

`@cspell/cspell-json-reporter` emits a JSON file with the following fields:

- `issues` - found spelling issues
- `result` - CSpell linting results
- `error` - CSell error messages
- `progress` - file linting progress messages if `settings.progress` is enabled
- `info` - CSpell execution logs if `settings.verbose` is enabled
- `debug` - CSpell debug logs if `settings.debug` is enabled

See [CSpellJSONReporterOutput](src/CSpellJSONReporterOutput.ts) for more info.

## Settings

Possible settings:

- `outFile` (required) - path for JSON file to emit
- `verbose` (default: false) - enable saving of execution logs
- `debug` (default: false) - enable saving of debug logs
- `progress` (default: false) - enable saving of file progress logs

See [CSpellJSONReporterSettings](src/CSpellJSONReporterSettings.ts) for more info.
