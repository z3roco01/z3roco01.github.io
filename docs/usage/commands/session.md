# `/watcher session`

- `start`: Starts the session with the [default length](/config/session.html)
- `start <MINUTES>`: Starts the session that is `MINUTES` minutes long
- `pause`: Pauses the current session timer, stopping everyone from moving, and pausing ticks.
- `unpause`: Unpauses the current session.
- `break`: Starts a break, acting the same as pause but with the [default break length](/config/session.html).
- `cancelbreak`: Cancels the current break that is happening.
- `first`: Needs to be ran before the session timer has started, will trigger the [`autostart`]() tasks that have been [enabled](/config/autostart)
- `add <MINUTES>`: Adds `MINUTES` minutes to the session timer.
- `sub <MINUTES>`: Subtracts `MINUTES` minutes from the session timer.
