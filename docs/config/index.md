# Configureation Overview

The configuration values are split amongst many files, all held in the `config/lifed/` directory in your minecraft/server directory.<br>
Lifed uses [Composed](https://github.com/z3roco01/composed) for it's configuration files, [here](https://github.com/z3roco01/composed/wiki/Composed-File-Format) is a link to it's data format. You can also use [Minecraft formatting codes](https://minecraft.wiki/w/Formatting_codes) in any text

## [`autostart.conf`](/config/autostart)
What things will be initialised on the first session/the start of every session.

## [`boogey.conf`](/config/boogey)
Contains config values for the [boogeyman](/feature/boogeyman) gimmick.

## [`gameplay.conf`](/config/gameplay)
Lets you configure various parts of the gameplay that apply regardless of gimmick.

## [`session.conf`](/config/session)
Configuration for things specific to the [session timer and lock](/feature/session).

## [`soulmates.conf`](/config/soulmates)
Tweak how the [soulmate](/feature/soulmates) gimmick works.
