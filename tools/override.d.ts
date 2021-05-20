import { Linter } from 'eslint'

function override<P extends string, T extends string, R extends Linter.RuleEntry, E extends string = T>(
  pluginPrefix: P, ruleName: T, rule: R, eslintRuleName?: E
): Record<`${P}/${T}`, R> & Record<E, [ 'off' ]>

namespace override {
  export function to<P extends string>( pluginPrefix: P ):
    <T extends string, R extends Linter.RuleEntry, E extends string = T>(
      ruleName: T, rule: R, eslintRuleName?: E 
    ) => Record<`${P}/${T}`, R> & Record<E, [ 'off' ]>
}

export = override
