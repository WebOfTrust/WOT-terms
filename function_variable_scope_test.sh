#!/bin/bash
var1='Abid'
var2='Ali'
my_function () {
    var3=$1
    local var1='Micheal'
    var2='Den'
    echo "Inside function: var1: $var1, var2: $var2 var3: $var3"
    return 0
}
echo "Before executing the function: var1: $var1, var2: $var2 var3: $var3"
my_function
echo "After executing the function: var1: $var1, var2: $var2 var3: $var3"