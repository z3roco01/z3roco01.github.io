# boogey.conf

- `maxBoogeymen` (Default: `10`) : The maximum amount of boogeymen that can be rolled (can be overriden when running the command)
- `lockoutPlayers` (Default: `true`) : When true, players who are not present when the boogeymen are rolled cannot join.
- `sequentialBoogeyChance` (Default: `0.5`) : Kinda complicated, it is a decimal precentage (ex: 50% is 0.5, 15% is 0.15) that determins how likely each next boogeyman is to be rolled. The first boogey always has a 100% chance. For example: if it is set to 0.5, the first boogey would have a 100% of existing, the 2nd would have a 50%, the 3rd would be 25% and so on. See [this](https://github.com/z3roco01/lifed/blob/master/src/main/java/z3roco01/lifed/features/BoogeymanManager.java#L114) method in the code for more if that helps you understand.
