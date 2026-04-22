Global Execution Context is made at the very start when the env has been given a js file
This global ec is referred as this word and every env (browser, node, deno etc) has different execution contexts, in browser the value is window

Function Execution Context

And the third is Eval Execution Context (not necessary, just knowing is good), (a property of global ec)

The code is ran in two phases by js: (1) Memory/Memory Creation Phase or Creation Phase (2) Execution Phase

Steps of Execution: 

(1) Global Execution: The code is, at the very start is ran through GE and it is located in (this)

(2) Memory/Creation Phase: All the variables are stored in memory and undefined is stored at the very start. For the function, its definition is stored, the code inside it.

(3) Execution Phase: Now the actual values would be stored. And operations would be performed.           

        In this phase, if the function is encountered, it isn't executed, no execution to be done and the definiton of the function has already been stored in the previous phase. 
    Now whenever the function is called (executed), a new context is created called New Executional Context in which a new variable environment and execution thread is created. Like a sandbox which has both of these, in which the two phases (creation and execution) are done. Now this execution context refers to the function definition scope to get the values and what to do. The return of the function is returned to the global execution context.

    This new executional context also gets deleted after the work is done.


    Call Stack 
    Easy. LIFO 