Handlers is a reference to those long running object
such as connection, request and file stream.

When there are active handler running in the process,
node js will keep running those handler in each tick. That
loop is determined by registered handler count. 
 
This is why http createServer keep running,
as this function will register an active handler in environment.

Every active handler have a stop method, which deactivate the handler,
or you may unref the handler from the active handler queue. Where the handler
will not count by the event loop, but still keep running in each tick.

