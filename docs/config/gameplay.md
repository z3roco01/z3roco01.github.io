# gameplay.conf

- `lightningsOnRedDeath` (Default: `5`) : How many lightning bolts will strike where someone died on their last life.
- `bannedItems` (Default: `["minecraft:bookshelf"]`) : Array of items which will be deleted upon entering a players inventory
- `uncraftableItmes` (Default: `["minecraft:enchanting_table"]`) : Array of items which players can never craft
- `bannedEffects` (Default: `["minecraft:strenght"]`) : Array of status effects which cannot be applied to a player
- `highLevelPvpEnchAllowed` (Default: `false`) : Are PVP related enchantments (list [here](https://github.com/z3roco01/lifed/blob/master/src/main/java/z3roco01/lifed/mixin/EnchantmentHelperMixin.java#L32)) allowed to be applied at levels higher than 1
- `highLevelOtherEnchAllowed` (Default: `true`) : Are non PVP related enchantments (list [here](https://github.com/z3roco01/lifed/blob/master/src/main/java/z3roco01/lifed/mixin/EnchantmentHelperMixin.java#L62), all enchantments not listed in either place are ignored) allowed to be applied at levels above 1.
- `mendingBanned` (Default: `true`) : Is mending disallowed from being applied.
- `expandedWolfSpawning` (Default: `true`) : Are wolves allowed to spawn in other biomes (each biome allowed is listed in every `is_extended_<VARIENT>.json` file [here](https://github.com/z3roco01/lifed/tree/master/src/main/resources/data/lifed/tags/worldgen/biome))
- `totemsConvertable` (Default: `true`) : Can totems be right clicked to be converted into another life for the user.
- `wolfLimit` (Default: `5`) : Maximum amount of wolves one player can have (applies to wolves birthed from currently owned wolves), set to `-1` or lower to disable.
- `watcherDebug` (Default: `false`) : Not recommended, enabled various potentially undocumented or cheaty commands in `/watcher debug`.
- `logEvents` (Default: `false`) : Should certain events like life amount change and boogey kill be logged to the console. Not recommended since it can reveal secret information.
- `borderSize` (Default: `500`) : How big should the world border be set to when the world is started. Set to `1` or lower to disable automatic world border
